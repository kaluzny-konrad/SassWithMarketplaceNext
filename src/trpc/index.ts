import { router } from "./trpc";
import { authRouter } from "./auth-router";
import { paymentRouter } from "./payment-router";
import { productsRouter } from "./products-router";

export const appRouter = router({
  auth: authRouter,
  payment: paymentRouter,
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
