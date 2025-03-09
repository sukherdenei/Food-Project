import { Request, Response } from "express";
import foodOrderModel from "../models/food-order.model";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = await foodOrderModel.create(req.body);
    res.status(201).json({ message: "Order successfully created", newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in create food order", error });
  }
};

export const getFoodOrders = async (req: Request, res: Response) => {
  try {
    const getOrders = await foodOrderModel
      .find()
      .populate("user")
      .populate("food order items");
    res.status(200).json({ message: "getFoodOrder(successfully)", getOrders });
  } catch (error) {
    res.status(500).json({ message: "Error in get food orders", error });
  }
};

export const getFoodOrdersByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orders = await foodOrderModel
      .find({ user: userId })
      .populate("foodOrderItems");
    res.status(200).json({ message: "get food orders by user", orders });
  } catch (error) {
    res.status(500).json({ message: "Error in get food order by user", error });
  }
};

export const updateFoodOrder = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;
    const updatedOrder = await foodOrderModel.findByIdAndUpdate(
      foodOrderId,
      req.body,
      { new: true }
    );
    if (!updatedOrder) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Order successfully updated", updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error in update food order", error });
  }
};
