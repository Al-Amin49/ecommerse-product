import express, { Request, Response } from 'express'
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
import notFound from './app/middlewares/notFound';


const app = express()

//middlewares
app.use(express.json())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
  })
);




// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
app.use(notFound);

export default app;
