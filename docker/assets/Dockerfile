# builder
FROM golang:1.14.2 AS builder
WORKDIR /assets
COPY . .
RUN make tidy
RUN env GOARCH=386 GOOS=linux CGO_ENABLED=0 make assets

# runner
FROM alpine
WORKDIR /app
COPY --from=builder /assets/bin/game_assets .
COPY --from=builder /assets/config/assets_docker.json .
COPY --from=builder /assets/config/server.crt .
COPY --from=builder /assets/config/server.key .
ENTRYPOINT ["/app/game_assets", "/app/assets_docker.json"]
