
import { model, Schema, Types } from "mongoose";

// Message Schema 
 const messageSchema = new Schema({
  message:{type:String , required:true , minlength:4 , maxlength:60000 ,trim:true},
  receiverId:{type:Types.ObjectId , ref:"User" , required:true}
},{timestamps:true})
// Message Model 
 const Message = model("Message" , messageSchema)
 export default Message
 // ObjectId  4 Bytes ===> TimeStamp , 3 Bytes ===> Machine Identifer , 2 Bytes ===> Process Id , 3 Bytes ===> Counter 