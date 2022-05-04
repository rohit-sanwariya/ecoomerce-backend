import Wishlist from "../../models/Wishlist.js";


const getUserWishlist = async(req,res) =>{
    console.log(req.user.id);    
    try {
            const userWishList = await Wishlist.findOne(
                {
                id:req.user.id
            }
            )
            res.status(200).json(userWishList)
        } catch (error) {
            res.status(500).json(error)
        }
}

export default getUserWishlist;