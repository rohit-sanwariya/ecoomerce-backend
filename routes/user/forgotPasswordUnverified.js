import User from "../../models/User.js";
import AES from "crypto-js/aes.js";
import ENCUTF8 from "crypto-js/enc-utf8.js";

const forgotPasswordNoAccessToken = async (req, res) => {
  const { newPassword, ...user } = { ...req.body };
  const encryptNewPassword = AES.encrypt(
    newPassword,
    process.env.PASSWORD_SECRET_KEY
  ).toString();
  user.password = encryptNewPassword;
  const userId = req.params["id"];

  try {
    const findUser = await User.findById(req.params.id);
    const decrptOldPassword = AES.decrypt(
      findUser.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(ENCUTF8);
    console.log(decrptOldPassword === newPassword);
    decrptOldPassword === newPassword &&
      res
        .status(405)
        .json(new Error("Your Old and new Password can not be same"));
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $set: user,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    !res.headersSent && res.status(500).json(error);
  }
};

export default forgotPasswordNoAccessToken;
