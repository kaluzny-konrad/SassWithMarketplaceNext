# SassWithMarketplaceNext
Next.js app on Render with Payload, Mongo, Stripe, Resend and custom Auth

# Init steps

1. `npx create-next-app@latest`
2. Add `server.ts` with express for payload
3. Add `payload.config.js` with payload config
4. Deploy app to Render (build commands `npm install; npm run build`, start commands `npm run start`)
5. Init Users collection with mail verification and run `npm run generate:types`
6. Init Shadcn `npx shadcn-ui@latest init` and init some components `npx shadcn-ui@latest add button`
7. Add safety middleware

## Core Packages to install:
- `express`
- `payload`
- `stripe`
- `nodemailer`
- `zod`
- `zustand`

## Dev Packages to install:
- `@types/express`
- `nodemon`
- `copyfiles`
- `cross-env`
