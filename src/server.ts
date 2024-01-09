import express from "express";
import nextBuild from "next/dist/build";
import path from "path";
import { nextApp, nextHandler } from "./next-utils";
import { getPayloadClient } from "./get-payload";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`> Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      const dir = path.join(__dirname, "../");
      payload.logger.info(`> Build started to dir: ${dir}`);
      await nextBuild(
        dir,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        "default"
      );

      process.exit();
    });
    return;
  }

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info(`Next.js started`);
    app.listen(PORT, async () => {
      payload.logger.info(
        `> App listen on ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
