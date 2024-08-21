import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

export const createOrder = async (orderData: TOrder) => {
    const product = await Product.findOne();
    if (!product) {
        throw new Error('No product found to assign to the order.');
    }

    // Create new order
    const newOrder = await Order.create({
        ...orderData,
        productId: product._id, 
    });

    return newOrder;
};
 const getOrders = async () => {
    return await Order.find();
};

 const getOrdersByEmail = async (email: string) => {
    return await Order.find({ email });
};
export const OrderServices={
getOrders,
getOrdersByEmail,
createOrder
}
