# SassWithMarketplaceNextOnVercel
Next.js app on Vercel with Payload, Mongo, Stripe, Resend and custom Auth

# Init steps

1. `npx create-next-app@latest`
2. Add `server.ts` with express for payload
3. Create vercel deployment
4. Set env variables in Vercel (for start `NEXT_PUBLIC_SERVER_URL`)
5. Init Web Analytics in Vercel https://vercel.com/docs/analytics/quickstart
6. Init Speed Insights in Vercel https://vercel.com/docs/speed-insights/quickstart

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
