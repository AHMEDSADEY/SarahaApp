import joi from "joi";
import { genralFields } from "../../../../middleware/validation.middleware.js";

export const signUp = {
  body:joi.object().keys({
    userName:genralFields.userName.required(),
    email:genralFields.email.required(),
    password:genralFields.password.required(),
    confirmationPassword:genralFields.confirmationPassword.required(),
    phone:genralFields.phone.messages({
      'any.required':"Phone IS REQUIRED"
    }).required()
}).required().options({allowUnknown:false}),
}