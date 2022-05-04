import mongoose from "mongoose";

const AddressShema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    addresses: [
      {
        country: {
          type: String,
          required: true, 
        },
        fullname: {
          type: String,
          required: true,
        },
       
            street: {
                type: String,
                required: true,
              },
              city: {
                type: String,
                required: true,
              },
              state: {
                type: String,
                required: true,
              },
              zip: {
                type: String,
                required: true,
              },
              phone: {
                type: Number,
                required: true,
                
              },
              isDefault:{
                type:Boolean,
                required:true,
                default:false
              }
                    
      },
    ],
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Address", AddressShema);
