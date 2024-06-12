import express from "express";
import "dotenv/config";
import cors from "cors";
import { sequelize } from "./utils/db.js";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware.js";
import { questionRouter } from "./routers/questionRouter.js";

const app = express();

const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use("/api", questionRouter);

// Подключение в конце, обработка ошибок
app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(port, () => {
      console.log(
        `[${new Date().getUTCFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDay()}]: Server up and listening on port ${port}`
      );
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
