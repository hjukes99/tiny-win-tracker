# Tiny Win Tracker

A tiny app to capture daily wins and keep momentum visible.

## Features
- Add a win with timestamp
- View today's wins
- View 7-day win totals
- Local JSON persistence
- Basic automated tests

## Stack
- Node.js 20+
- TypeScript
- Express
- Vitest

## Setup
```bash
npm install
```

## Run (dev)
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Test
```bash
npm test
```

## Docker
```bash
docker build -t tiny-win-tracker .
docker run --rm -p 3000:3000 tiny-win-tracker
```
