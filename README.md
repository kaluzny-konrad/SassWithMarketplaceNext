# SassWithMarketplaceNext
Next.js app on Render with Payload, Mongo, Stripe, Resend and custom Auth

# Init steps

1. `npx create-next-app@latest`
2. Add `server.ts` with express for payload
3. Add `payload.config.js` with payload config
4. Deploy app to Render (build commands `npm install; npm run build`, start commands `npm run start`)
5. Init Users collection with mail verification and run `npm run generate:types`

## Core Packages to install:
- `express`
- `payload`

All base command: `npm install express dotenv`
All payload command: `npm install payload @payloadcms/bundler-webpack @payloadcms/db-mongodb @payloadcms/richtext-slate`
Users collection command: `npm install @react-email/components`

## Dev Packages to install:
- `@types/express`
- `nodemon`
- `copyfiles`
- `cross-env`

All install dev command: `npm install -D @types/express nodemon copyfiles cross-env`
