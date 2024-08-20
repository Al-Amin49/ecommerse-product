import { model, Schema } from "mongoose";
import { TProduct, TProductInventory, TProductVariant } from "./product.interface";

const variantSchema = new Schema<TProductVariant>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const inventorySchema = new Schema<TProductInventory>({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
});
const productSchema= new Schema<TProduct>({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String
    },
    tags:{
        type:[String]
    },
    variants: {
        type: [variantSchema],
        required: false
    },
    inventory: {
        type: inventorySchema,
        required: true
    }
})

export const Product= model('Product', productSchema)