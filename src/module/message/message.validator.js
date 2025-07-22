import joi from "joi";
import { genralFields } from "../../middleware/validation.middleware.js";

export const sendMessage = {
  body:joi.object().keys({
    message:joi.string().min(6).max(60000).required(),
    receiverId:genralFields.id.required()
  }).required()
  }