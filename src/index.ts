import bodyParser from "body-parser";
import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import { connetMongoDb } from "./database/db";
import categoryRoute from "./routes/food-category.route";

configDotenv();
connetMongoDb();

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT;

app.use("/category", categoryRoute);

app.listen(port, () => {
  console.log(`$erver running on port: ${port}`);
});
