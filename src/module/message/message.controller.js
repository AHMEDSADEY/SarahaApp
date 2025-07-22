import { Router } from "express";
import * as messageService from "../message/services/message.services.js"
import { asyncHandler } from "../../utils/error/Error/error.js";
import { validation } from "../../middleware/validation.middleware.js";
import * as messageValidator from "../message/message.validator.js"
const router = Router()
router.post("/sendMessage",validation(messageValidator.sendMessage),asyncHandler(messageService.sendMessage))
export default router 