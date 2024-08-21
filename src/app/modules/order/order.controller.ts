import { Request, Response } from 'express';

import { orderValidationSchema } from './order.validation';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    // Data validation using Zod
    const zodParsedData = orderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrder(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Order is created successfully',
      data: result,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getOrders();

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: result,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
    try {
      const { email } = req.query;
  
      // Validate email query parameter
      if (typeof email !== 'string') {
        return res.status(400).json({
          success: false,
          message: 'Invalid email query parameter',
        });
      }
  
      const result = await OrderServices.getOrdersByEmail(email);
  
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully',
        data: result,
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  };
  

export const OrderControllers={
    createOrder,
    getAllOrders,
    getOrdersByEmail
}