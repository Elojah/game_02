# builder
FROM golang:1.14.2 AS builder
WORKDIR /auth
COPY . .
RUN make tidy
RUN env GOARCH=386 GOOS=linux CGO_ENABLED=0 make auth

# runner
FROM alpine
WORKDIR /app
COPY --from=builder /auth/bin/game_auth .
COPY --from=builder /auth/config/auth_docker.json .
COPY --from=builder /auth/config/server.crt .
COPY --from=builder /auth/config/server.key .
ENTRYPOINT ["/app/game_auth", "/app/auth_docker.json"]
