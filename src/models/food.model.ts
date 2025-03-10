import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

type FoodCategorySchemaType = {
  categoryName: Schema.Types.ObjectId;
};

const FoodCategorySchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      rel: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<FoodCategorySchemaType>(
  "Food",
  FoodCategorySchema
);
