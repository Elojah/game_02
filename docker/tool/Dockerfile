# builder
FROM golang:1.14.2 AS builder
WORKDIR /tool
COPY . .
RUN make tidy
RUN env GOARCH=386 GOOS=linux CGO_ENABLED=0 make tool

# runner
FROM alpine
WORKDIR /app
COPY --from=builder /tool/bin/game_tool .
COPY --from=builder /tool/config/tool_docker.json .
COPY --from=builder /tool/config/server.crt .
COPY --from=builder /tool/config/server.key .
ENTRYPOINT ["/app/game_tool", "/app/tool_docker.json"]
