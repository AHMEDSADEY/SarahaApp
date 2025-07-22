import { Router } from "express";
import * as signUpServices from "./Services/signup/signup.services.js"
import * as logInServices from "./Services/login/login.services.js"
import { asyncHandler } from "../../utils/error/Error/error.js";
import {validation} from "../../middleware/validation.middleware.js"
  import * as signupvalidator from "./Services/signup/signup.validation.js"
const router = Router() 

router.post("/signUp",validation(signupvalidator.signUp), asyncHandler(signUpServices.signUp))
router.patch("/confrmEmail",asyncHandler(signUpServices.confrmEmail))
router.post("/logIn",asyncHandler(logInServices.logIn))
export default router 