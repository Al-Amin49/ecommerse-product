import { z } from "zod";

const productVariantSchema = z.object({
  type: z.string().nonempty({ message: "Variant type is required" }),
  value: z.string().nonempty({ message: "Variant value is required" }),
});

const productInventorySchema = z.object({
  quantity: z.number().min(0, { message: "Quantity must be a non-negative number" }),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().nonempty({ message: "Product name is required" }),
  description: z.string().nonempty({ message: "Product description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().optional(),
  tags: z.array(z.string().nonempty({ message: "Tag cannot be empty" })).optional(),
  variants: z.array(productVariantSchema).optional(),
  inventory: productInventorySchema,
});

export default productValidationSchema;
