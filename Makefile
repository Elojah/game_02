PACKAGE    = game
DATE      ?= $(shell date +%FT%T%z)
VERSION   ?= $(shell echo $(shell cat $(PWD)/.version)-$(shell git describe --tags --always))

DIR        = $(strip $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST)))))
GO_PACKAGE = github.com/elojah/game_02

GO = go

ifneq ($(wildcard ./bin/golangci-lint),)
	GOLINT = ./bin/golangci-lint
else
	GOLINT = golangci-lint
endif

GOROOT     ?= $(shell go env GOROOT)

GODOC       = godoc
GOFMT       = gofmt

AUTH        = auth
MAPPER      = mapper
BROWSER     = browser
WEB         = web

V         = 0
Q         = $(if $(filter 1,$V),,@)
M         = $(shell printf "\033[0;35m▶\033[0m")

.PHONY: all

all: auth mapper browser web

.PHONY: auth
auth:  ## Build auth binary
	$(info $(M) building executable auth…) @
	$Q cd cmd/$(AUTH) && $(GO) build \
		-tags release \
		-ldflags '-X $(PACKAGE)/cmd.Version=$(VERSION)' \
		-o ../../bin/$(PACKAGE)_$(AUTH)_$(VERSION)
	$Q cp bin/$(PACKAGE)_$(AUTH)_$(VERSION) bin/$(PACKAGE)_$(AUTH)

.PHONY: mapper
mapper:  ## Build mapper binary
	$(info $(M) building executable mapper…) @
	$Q cd cmd/$(MAPPER) && $(GO) build \
		-tags release \
		-ldflags '-X $(PACKAGE)/cmd.Version=$(VERSION)' \
		-o ../../bin/$(PACKAGE)_$(MAPPER)_$(VERSION)
	$Q cp bin/$(PACKAGE)_$(MAPPER)_$(VERSION) bin/$(PACKAGE)_$(MAPPER)

.PHONY: browser
browser:  ## Build browser content
	$(info $(M) building executable browser…) @
	$Q cd cmd/$(BROWSER) && GOOS=js GOARCH=wasm $(GO) build \
		-tags release \
		-ldflags '-X $(PACKAGE)/cmd.Version=$(VERSION)' \
		-o ../../bin/$(PACKAGE)_$(BROWSER)_$(VERSION).wasm
	$Q yes | cp -rf bin/$(PACKAGE)_$(BROWSER)_$(VERSION).wasm bin/$(PACKAGE)_$(BROWSER).wasm

.PHONY: web
web: ## Build web binary
	$(info $(M) building executable web…) @
	$Q cd cmd/$(WEB) && $(GO) build \
		-tags release \
		-ldflags '-X $(PACKAGE)/cmd.Version=$(VERSION)' \
		-o ../../bin/$(PACKAGE)_$(WEB)_$(VERSION)
	$Q yes | cp -rf bin/$(PACKAGE)_$(WEB)_$(VERSION) bin/$(PACKAGE)_$(WEB)
	$Q yes | cp -Rrf cmd/$(WEB)/static bin/ # static files
	$Q yes | cp -rf bin/$(PACKAGE)_$(BROWSER)_$(VERSION).wasm bin/static/$(PACKAGE)_$(BROWSER).wasm

file-mapper:  ## Copy mapper directory into bin directory for testing and vendoring
	$(info $(M) copy mapper directory…) @
	$Q yes | cp -Rrf mapper bin/static/

# Utils
.PHONY: proto
proto: ## Generate .proto files
	$(info $(M) running protobuf…) @
		$Q cd pkg/geometry     && protoc -I=. -I=$(GOPATH)/src --gogoslick_out=. geometry.proto
		$Q cd pkg/room         && protoc -I=. -I=$(GOPATH)/src --gogoslick_out=. room.proto
		$Q cd pkg/account      && protoc -I=. -I=$(GOPATH)/src --gogoslick_out=. account.proto
		$Q cd pkg/account/dto  && protoc -I=. -I=$(GOPATH)/src --gogoslick_out=. account.proto
		$Q cd pkg/item         && protoc -I=. -I=$(GOPATH)/src --gogoslick_out=. item.proto
		$Q cd pkg/entity       && protoc -I=$(DIR)/pkg/geometry -I=. -I=$(GOPATH)/src --gogoslick_out=Mgeometry.proto=$(GO_PACKAGE)/pkg/geometry:. entity.proto
		$Q cd pkg/entity       && protoc -I=. -I=$(GOPATH)/src --gogoslick_out=. template.proto
		$Q cd pkg/lobby        && protoc -I=$(DIR)/pkg/room -I=. -I=$(GOPATH)/src --gogoslick_out=Mroom.proto=$(GO_PACKAGE)/pkg/room:. lobby.proto
		$Q cd pkg/player       && protoc -I=$(DIR)/pkg/geometry -I=. -I=$(GOPATH)/src --gogoslick_out=Mgeometry.proto=$(GO_PACKAGE)/pkg/geometry:. spawn.proto
		$Q cd pkg/player       && protoc -I=. -I=$(GOPATH)/src --gogoslick_out=. inventory.proto
		$Q cd pkg/player/dto   && protoc -I=$(DIR)/pkg/account/dto -I=. -I=$(GOPATH)/src --gogoslick_out=Maccount.proto=$(GO_PACKAGE)/pkg/account/dto:. player.proto
		$Q cd pkg/space        && protoc -I=$(DIR)/pkg/geometry -I=. -I=$(GOPATH)/src --gogoslick_out=Mgeometry.proto=$(GO_PACKAGE)/pkg/geometry:. coordinate.proto
		$Q cd pkg/space        && protoc -I=$(DIR)/pkg/geometry -I=. -I=$(GOPATH)/src --gogoslick_out=Mgeometry.proto=$(GO_PACKAGE)/pkg/geometry:. sector.proto

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
	$Q $(GOLINT) run --deadline=5m

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
