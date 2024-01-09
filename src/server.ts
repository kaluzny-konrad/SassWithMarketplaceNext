import express from "express";
import nextBuild from "next/dist/build";
import path from "path";
import { nextApp, nextHandler } from "./next-utils";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      const dir = path.join(__dirname, "../");
      console.log(`> Build started to dir: ${dir}`);
      await nextBuild(dir, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "default");

      process.exit();
    });
    return;
  }

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    app.listen(PORT, async () => {
      console.log(`> App listen on ${process.env.NEXT_PUBLIC_SERVER_URL}:${PORT}`);
    });
  });
};

start();
