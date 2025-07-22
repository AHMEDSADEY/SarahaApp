import { Router } from "express";
import * as userServices from "./services/user.services.js";
import {
  authentication,
  authorization,
} from "../../middleware/auth.middleware.js";
import { endPoint } from "./user.endPoint.js";
import { asyncHandler } from "../../utils/error/Error/error.js";
import { validation } from "../../middleware/validation.middleware.js";
import * as userValidator from "./user.validator.js"
const router = Router();
router.get(
  "/profile",
    authentication,
  authorization(endPoint.profile),
  asyncHandler(userServices.profile)
);
router.get(
  "/profile/:userId",
  validation(userValidator.shareProfile),
  asyncHandler(userServices.shareProfile)
);
router.patch(
  "/updateProfile",
  validation(userValidator.updataProfile),
authentication,
  asyncHandler(authorization(endPoint.profile)),
  asyncHandler(userServices.updataProfile)
);
router.patch(
  "/updatePassword",
  validation(userValidator.updataPassword),
  authentication,
  asyncHandler(authorization(endPoint.profile)),
  asyncHandler(userServices.updatePassword)
);
router.delete(
  "/freezeProfile",
  authentication,
  asyncHandler(authorization(endPoint.profile)),
  asyncHandler(userServices.freezeProfile)
);
export default router;
