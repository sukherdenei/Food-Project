import express, { Router } from "express";
import {
  createFoodCategory,
  getFoodCategory,
  getFoodCategoryDelete,
  getFoodCategoryPut,
} from "../controllers/food-category.controllers";

const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategory);
categoryRoute.delete("/", getFoodCategoryDelete);
categoryRoute.put("/", getFoodCategoryPut);

export default categoryRoute;
