import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();
router.get('/email', OrderControllers.getOrdersByEmail);
router.post('/', OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrders)






export const OrderRoutes = router;
