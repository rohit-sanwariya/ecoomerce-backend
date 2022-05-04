import Wishlist from "../../models/Wishlist.js";

const updateWishlist = async(req,res)=>{
    console.log(req.body);
    try {
        const wishUpdated = await Wishlist.findByIdAndUpdate(
req.body._id,{
    $set:req.body
}
        )
        const wishFound = await Wishlist.findById(req.body._id )
        console.log(wishUpdated);
        console.log(req.body);
        res.status(200).json(wishUpdated)
         
    } catch (error) {
        res.status(500).json(error)
    }
}

export default updateWishlist;