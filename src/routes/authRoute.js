import express from "express";
const router = express.Router();

import {
  activateUser,
  generateOTP,
  insertNewUser,
  loginUser,
  logoutUser,
  restNewPassword,
} from "../controllers/authController.js";
import {
  loginDataValidation,
  newPasswordResetValidation,
  newUserDataValidation,
  userActivationDataValidation,
} from "../middleware/validations/authDataValidation.js";
import {
  renewAccessJWTMiddleware,
  userAuthMiddleware,
} from "../middleware/authMiddleware.js";

// User signup

router.post("/register", newUserDataValidation, insertNewUser);
router.post("/activate-user", userActivationDataValidation, activateUser);
router.post("/login", loginDataValidation, loginUser);
router.get("/renew-jwt", renewAccessJWTMiddleware);
router.get("/logout", userAuthMiddleware, logoutUser);
router.post("/otp", generateOTP);
router.post("/reset-password", newPasswordResetValidation, restNewPassword);

export default router;
