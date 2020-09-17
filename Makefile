# Common
PACKAGE    = game
DATE      ?= $(shell date +%FT%T%z)
VERSION   ?= $(shell echo $(shell cat $(PWD)/.version)-$(shell git describe --tags --always))
DIR        = $(strip $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST)))))

# Terminal visual
V         = 0
Q         = $(if $(filter 1,$V),,@)
M         = $(shell printf "\033[0;35m▶\033[0m")

# Go
GO_PACKAGE = github.com/elojah/game_02
GO = go
ifneq ($(wildcard ./bin/golangci-lint),)
	GOLINT = ./bin/golangci-lint
else
	GOLINT = golangci-lint
endif
ifndef GOPATH
	GOPATH = $(HOME)/go
endif
GOROOT     ?= $(shell go env GOROOT)
GODOC       = godoc
GOFMT       = gofmt

# Executables
AUTH        = auth
MAPPER      = mapper
TOOL        = tool
BROWSER     = browser
WEB         = web

# Protobuf helpers
PROTOC_GEN_TS     = $(DIR)/cmd/$(BROWSER)/node_modules/.bin/protoc-gen-ts
GEN_PB            = protoc -I=$(GOPATH)/src --gogoslick_out=$(GOPATH)/src --plugin=protoc-gen-ts=$(PROTOC_GEN_TS) --js_out=import_style=commonjs,binary:$(GOPATH)/src --ts_out=$(GOPATH)/src
GEN_PB_SERVICE    = protoc -I=$(GOPATH)/src --gogoslick_out=plugins=grpc,Mgoogle/protobuf/empty.proto=github.com/gogo/protobuf/types:$(GOPATH)/src --plugin=protoc-gen-ts=$(PROTOC_GEN_TS) --js_out=import_style=commonjs,binary:$(GOPATH)/src --ts_out=service=grpc-web:$(GOPATH)/src

.PHONY: all

all: auth mapper browser web tool

.PHONY: auth
auth:  ## Build auth binary
	$(info $(M) building executable auth…) @
	$Q cd cmd/$(AUTH) && $(GO) build \
		-mod=readonly \
		-tags release \
		-ldflags '-X $(PACKAGE)/cmd.Version=$(VERSION)' \
		-o ../../bin/$(PACKAGE)_$(AUTH)_$(VERSION)
	$Q cp bin/$(PACKAGE)_$(AUTH)_$(VERSION) bin/$(PACKAGE)_$(AUTH)

.PHONY: mapper
mapper:  ## Build mapper binary
	$(info $(M) building executable mapper…) @
	$Q cd cmd/$(MAPPER) && $(GO) build \
		-mod=readonly \
		-tags release \
		-ldflags '-X $(PACKAGE)/cmd.Version=$(VERSION)' \
		-o ../../bin/$(PACKAGE)_$(MAPPER)_$(VERSION)
	$Q cp bin/$(PACKAGE)_$(MAPPER)_$(VERSION) bin/$(PACKAGE)_$(MAPPER)

.PHONY: tool
tool:  ## Build tool binary
	$(info $(M) building executable tool…) @
	$Q cd cmd/$(TOOL) && $(GO) build \
		-mod=readonly \
		-tags release \
		-ldflags '-X $(PACKAGE)/cmd.Version=$(VERSION)' \
		-o ../../bin/$(PACKAGE)_$(TOOL)_$(VERSION)
	$Q cp bin/$(PACKAGE)_$(TOOL)_$(VERSION) bin/$(PACKAGE)_$(TOOL)

.PHONY: browser
browser:  ## Build browser content
	$(info $(M) building bundle browser…) @
	$Q cd cmd/$(BROWSER) && npx webpack --config webpack.config.js
	$Q yes | cp -rf cmd/$(BROWSER)/index.html cmd/$(BROWSER)/dist/index.html
	$Q yes | cp -rf cmd/$(BROWSER)/favicon.ico cmd/$(BROWSER)/dist/favicon.ico
	$Q yes | cp -rf cmd/$(BROWSER)/dist/. bin/static

.PHONY: web
web: browser ## Build web binary
	$(info $(M) building executable web…) @
	$Q cd cmd/$(WEB) && $(GO) build \
		-mod=readonly \
		-tags release \
		-ldflags '-X $(PACKAGE)/cmd.Version=$(VERSION)' \
		-o ../../bin/$(PACKAGE)_$(WEB)_$(VERSION)
	$Q yes | cp -rf bin/$(PACKAGE)_$(WEB)_$(VERSION) bin/$(PACKAGE)_$(WEB)

file-assets:  ## Copy assets directory into bin directory for testing and vendoring
	$(info $(M) copy assets directory…) @
	$Q yes | cp -Rrf assets/ bin/static/

# Utils
.PHONY: proto
proto: ## Regenerate protobuf files
	$(info $(M) running protobuf…) @
	$(info $(M) generate utils…) @
	$Q $(GEN_PB) github.com/gogo/protobuf/gogoproto/gogo.proto
	$(info $(M) generate domain…) @
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/geometry/geometry.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/room/room.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/account/account.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/item/item.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/entity/entity.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/entity/template.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/lobby/lobby.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/player/player.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/player/spawn.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/player/inventory.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/space/coordinate.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/space/tile.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/space/sector.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/space/world.proto
	$(info $(M) generate dto…) @
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/account/dto/account.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/player/dto/player.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/space/dto/tile.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/space/dto/sector.proto
	$Q $(GEN_PB) $(GO_PACKAGE)/pkg/room/dto/room.proto
	$(info $(M) generate services…) @
	$Q $(GEN_PB_SERVICE) $(GO_PACKAGE)/cmd/$(AUTH)/grpc/$(AUTH).proto
	$Q sed -i '/goog.object.extend/d' cmd/$(AUTH)/grpc/$(AUTH)_pb.js
	$Q $(GEN_PB_SERVICE) $(GO_PACKAGE)/cmd/$(MAPPER)/grpc/$(MAPPER).proto
	$Q sed -i '/goog.object.extend/d' cmd/$(MAPPER)/grpc/$(MAPPER)_pb.js
	$Q $(GEN_PB_SERVICE) $(GO_PACKAGE)/cmd/$(TOOL)/grpc/$(TOOL).proto
	$Q sed -i '/goog.object.extend/d' cmd/$(TOOL)/grpc/$(TOOL)_pb.js

# Vendoring
.PHONY: vendor
vendor: ## Write dependencies into vendor
	$(info $(M) running go mod vendor…) @
	$Q $(GO) mod vendor

.PHONY: tidy
tidy: ## Remove unused dependencies and add new required
	$(info $(M) running go mod tidy…) @
	$Q $(GO) mod tidy

# Check
.PHONY: check ## lint + test
check: vendor lint test

# Lint
.PHONY: lint
lint: ## Check code respect linter rules
	$(info $(M) running $(GOLINT)…)
	$Q $(GOLINT) run --modules-download-mode=readonly --deadline=5m

# Test
.PHONY: test
test: ## Run unit tests only
	$(info $(M) running go test…) @
	$Q $(GO) test -cover -race -v ./...

# Integration test
.PHONY: integration
integration: ## Run integration test
	$(info $(M) running integration tests…) @
	$Q make
	$Q docker-compose up -d redis redis-lru
	$Q make $(INTEGRATION) && ./bin/game_$(INTEGRATION)

# Helpers
go-version: ## Print go version used in this makefile
	$Q echo $(GO)

.PHONY: fmt
fmt: ## Format code
	$(info $(M) running $(GOFMT)…) @
	$Q $(GOFMT) ./...

.PHONY: doc
doc: ## Generate project documentation
	$(info $(M) running $(GODOC)…) @
	$Q $(GODOC) ./...

.PHONY: clean
clean: ## Clean generated binaries
	$(info $(M) cleaning…)	@ ## Cleanup everything
	@rm -rf bin/$(PACKAGE)_*

.PHONY: version
version: ## Print current project version
	@echo $(VERSION)

.PHONY: help
help: ## Print this
	@grep -E '^[ a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'
