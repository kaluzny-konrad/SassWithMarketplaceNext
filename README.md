# SassWithMarketplaceNext
Next.js app on Render with Payload, Mongo, Stripe, Resend and custom Auth

# Init steps

1. `npx create-next-app@latest`
2. Add `server.ts` with express for payload

## Core Packages to install:
- `express`
- `payload`

All base command: `npm install express @vercel/analytics @vercel/speed-insights dotenv`
All payload command: `npm install payload @payloadcms/bundler-webpack @payloadcms/db-mongodb @payloadcms/richtext-slate`

## Dev Packages to install:
- `@types/express`
- `nodemon`
- `copyfiles`
- `cross-env`

All install dev command: `npm install -D @types/express nodemon copyfiles cross-env`
