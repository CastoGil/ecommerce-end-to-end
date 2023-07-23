import express from "express";
import passport from "passport";
import { cartController } from "../controllers/controllerDb/cartController.js";
import { admin, authorize } from "../middlewares/index.js";
import { ticketController } from "../controllers/controllerDb/ticketController.js";

const router = express.Router();

// Ruta de Carrito
router.post("/", passport.authenticate("current", { session: false }), cartController.createCart);
router.get("/:cid", cartController.getCartById);
router.post("/:cid/products/:pid", passport.authenticate("current", { session: false }), admin, authorize, cartController.addProductToCart);
router.delete("/:cid/products/:pid", cartController.deleteProductFromCart);
router.put("/:cid", cartController.updateCart);
router.put("/:cid/products/:pid", cartController.updateProductQuantityInCart);
router.delete("/:cid", cartController.deleteAllProductsCart);
router.post("/:cid/purchase", passport.authenticate("current", { session: false }), ticketController.purchaseCart);

export default router;
