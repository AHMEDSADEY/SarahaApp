import User from "../../../../DB/model/User/user.model.js";
import { successResponse } from "../../../../utils/response/success.response.js";
import { genrateDecryption } from "../../../../utils/security/Encryption/encryption.js";
import { compareHash } from "../../../../utils/security/hash/hash.js";
import { generataToken } from "../../../../utils/security/Token/token.js";

export const logIn = async (req, res, next) => {
    //Destructuring Email OR Password from Body
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    // Login Error Message 
    return next(new Error("Login Faild !", { cause: 409 }));
  }
  //Re-account
    if(user.isDeleted){
      user.isDeleted = false
      await user.save()
    }
  // Phone Number Decryption
  user.phone = genrateDecryption({ cipherText: user.phone });
  const token = generataToken({
    payload: { id: user._id, isLoggin: true },
    signature:
      user.role == "Admin"
        ? process.env.Admin_TokenSignature
        : process.env.TokenSignature,
  });
  
  if (!compareHash({ plainText: password, hashValue: user.password })) {
    return next(
      new Error("Password is Not Match , Please Enter The Correct Password !", {
        cause: 404,
      })
    );
  }

  // Response Message
  return successResponse({
    res,
    message: "Created Successfully",
    data: { token },
  });
};
