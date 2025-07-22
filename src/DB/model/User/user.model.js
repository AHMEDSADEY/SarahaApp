
import mongoose, { model, Schema } from "mongoose";
export const genderType = {
  FEMALE: "female",
  MALE: "male",
};
export const roleType = {
  USER: "User",
  ADMIN: "Admin",
};
//Schema Type
const userModel = new Schema(
  {
    userName: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: {
        type:String,
        enum:[genderType.MALE, genderType.FEMALE],
        default: genderType.MALE,
    },
    role:{ 
        type:String,
        enum:Object.values(roleType),
        default: roleType.USER,
      },
    phone: String, // 1 - 01060938157 , 2- +20106093857 , 3- int storage 
    DOB: Date,
    image:String,
    confirmEmail: {type:Boolean , default:false},
    changePassword:Date,
    isDeleted:{type:Boolean , default:false}
  },
  { timestamps: true } // createdAt , updated At 
);
//Model
  const User = mongoose.models.User || model("User", userModel);
  export default User
