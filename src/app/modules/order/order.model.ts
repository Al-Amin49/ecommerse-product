import  { model, Schema } from 'mongoose';


const orderSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    productId:{
        type: Schema.Types.ObjectId, 
        ref: 'Product'
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
    type:Number,
    required:true
    }
})

export const Order= model('Order', orderSchema)