# Build & Run
default: build run

# Build WASM
componentize:
  jco componentize app.js --wit app.wit --world-name main --out app.wasm

# Transpile to JS
transpile-js:
  jco transpile app.wasm -o output --map 'app:fortnox/*=../interface/host.mjs#*'
  # Copy js to mjs to support modular imports
  cp output/app.js output/app.mjs

# Componentize & Transpile to JS
build: componentize transpile-js

# Run runner.mjs
run:
  node runner.mjs
