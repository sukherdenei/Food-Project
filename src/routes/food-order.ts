import express, { Router } from "express";
import { postFood } from "../controllers/food-order";

const orderRoute = express.Router();

orderRoute.get("/", postFood);

export default orderRoute;
