import Wishlist from "../../models/Wishlist.js";

const createWishList = async (req, res) => {
  const userId = req.params["userId"];
  console.log(req.body);
  const wishList = new Wishlist(req.body);

  try {
    const savedNewWishList = await wishList.save(); 
    console.log(savedNewWishList);
    res.status(200).json(savedNewWishList);
  } catch (error) {
      console.log(error);
    res.status(500).json(error);
  }
};

export default createWishList;
