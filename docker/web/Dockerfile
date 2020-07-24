# builder
FROM golang:1.14.2 AS builder
WORKDIR /web
COPY . .
RUN make tidy
RUN env GOARCH=386 GOOS=linux CGO_ENABLED=0 make web

# runner
FROM alpine
WORKDIR /app
COPY --from=builder /web/bin/game_web .
COPY --from=builder /web/bin/static .
COPY --from=builder /web/config/web_docker.json .
COPY --from=builder /web/config/server.crt .
COPY --from=builder /web/config/server.key .
ENTRYPOINT ["/app/game_web", "/app/web_docker.json"]
