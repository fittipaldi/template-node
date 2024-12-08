PROJECT_PATH := $(patsubst %/,%,$(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
OUTPUT_PATH := $(PROJECT_PATH)/_output

TAG ?=  $(shell git -C "$(PROJECT_PATH)" rev-parse HEAD)
ifdef VERSION
override TAG = $(VERSION)
endif

.PHONY: docker_build
docker_build: ## Build docker
	docker-compose build

.PHONY: docker_run
docker_run: ## Run app using docker
	docker-compose up -d

.PHONY: install
install: ## Install project dependencies
	npm install

.PHONY: reinstall
reinstall: ## Reinstall project dependencies, delete the node_modules folder and recreate
	rm -rf node_modules
	npm install

.PHONY: build
build: ## Build the application
	npm run build

.PHONY: start
start: build ## Start the application after building
	npm run start

.PHONY: dev
dev: ## Run the application in development mode
	npm run dev

.PHONY: test
test: ## Run tests
	npm run test

.PHONY: clean
clean: ## Clean the build artifacts
	rm -rf dist

.PHONY: test_coverage
test_coverage: ## Run tests with coverage reporting
	npm run test:coverage

help:
	@echo "Available commands:"
	@printf "%-30s %s\n" "Command" "Description"
	@echo "----------------------- ------------------------------------------"
	@grep -E '^[a-zA-Z._-]+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
