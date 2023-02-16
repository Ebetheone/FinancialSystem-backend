import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

const main = async () => {
  app.listen(port);
};
main();
