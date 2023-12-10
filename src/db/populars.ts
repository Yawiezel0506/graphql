import mongoose, {Schema, Model} from "mongoose";

interface PopularProduct {
    product_id: string
    quantity: number
}

const PopularSchema: Schema<PopularProduct> = new Schema<PopularProduct>({
    product_id: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
  });

  export const PopularModel: Model<PopularProduct> = mongoose.model<PopularProduct>(
    "populers",
    PopularSchema
  );