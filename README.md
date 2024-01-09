# SassWithMarketplaceNextOnVercel
Next.js app on Vercel with Payload, Mongo, Stripe, Resend and custom Auth

# Init steps

1. `npx create-next-app@latest`
2. Add `server.ts` with express for payload
3. Create vercel deployment
4. Set env variables in vercel (for start `NEXT_PUBLIC_SERVER_URL`)
5. Init Web Analytics in Vercel

## Core Packages to install:
- `express`
- `@vercel/analytics`

All install command: `npm install express @vercel/analytics`

## Dev Packages to install:
- `@types/express`
- `nodemon`
- `copyfiles`
- `dotenv`
- `cross-env`

All install dev command: `npm install -D @types/express nodemon copyfiles dotenv cross-env`
