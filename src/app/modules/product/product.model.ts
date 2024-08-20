import { model, Schema } from "mongoose";

const variantSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const inventorySchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
});
const productSchema= new Schema({

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