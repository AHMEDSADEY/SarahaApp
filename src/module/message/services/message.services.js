import Message from "../../../DB/model/message/message.model.js";
import User from "../../../DB/model/User/user.model.js";
import { successResponse } from "../../../utils/response/success.response.js";

export const sendMessage = async(req,res,next)=>{
  const {message , receiverId} = req.body
  if(!User.findOne({_id:receiverId , isDeleted:false})){
    return new Error(`Not Found Messages `,{cause:404})
  }
  const createMessage = await Message.create({message , receiverId})
  // sendMessage Response Message
  return successResponse({res , status:201 ,message:"Send Message Success",data:{createMessage} })
}