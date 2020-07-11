# builder
FROM golang:1.14.2 AS builder
WORKDIR /mapper
COPY . .
RUN make tidy
RUN env GOARCH=386 GOOS=linux CGO_ENABLED=0 make mapper

# runner
FROM alpine
WORKDIR /app
COPY --from=builder /mapper/bin/game_mapper .
COPY --from=builder /mapper/config/mapper_docker.json .
COPY --from=builder /mapper/config/server.crt .
COPY --from=builder /mapper/config/server.key .
ENTRYPOINT ["/app/game_mapper", "/app/mapper_docker.json"]
