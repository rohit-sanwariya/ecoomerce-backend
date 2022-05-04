import mongoose from "mongoose";

const WishSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    products: [
      {type:String,unique:true} 
    ],
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model("Wish", WishSchema);
