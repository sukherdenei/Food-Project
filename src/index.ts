import bodyParser from "body-parser";
import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import { connectMongoDb } from "./database/db";
import categoryRoute from "./routes/food-category.route";
import foodRoute from "./routes/food-order";
import foodOrderRoute from "./routes/food-order";
import { authenticationRoute } from "./routes/authentication-route";
import authUserRoute from "./routes/auth.route";

configDotenv();
connectMongoDb();

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT;

app.use("/food-category", categoryRoute);
app.use("/foods", foodRoute);
// app.use("/user", userRoute);
app.use("/auth", authUserRoute);
app.use("/food-order", foodOrderRoute);
app.use("/auth", authenticationRoute);

app.listen(port, () => {
  console.log(`$erver running on port: ${port}`);
});
