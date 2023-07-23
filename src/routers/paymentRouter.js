import express from "express";
import passport from "passport"
import { createSession, handleSuccess, handleCancel } from "../controllers/controllerDb/paymentController.js";
import { authorize, admin } from "../middlewares/index.js";
const router = express.Router();

router.post(
    "/create-checkout-session",
    passport.authenticate("current", { session: false }),
    admin,
    authorize,
    createSession
  );
  
router.get("/success", passport.authenticate("current", { session: false }), admin, authorize, handleSuccess);router.get("/cancel", passport.authenticate("current", { session: false }), handleCancel);
export default router;
