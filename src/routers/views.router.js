import express from "express";
import { authorize, admin } from "../middlewares/index.js";
import {
  realTimeAddProduct,
  realTimeDeleteProduct,
  realTimeProduct,
  viewProduct,
} from "../controllers/controllerDb/viewsManager.js";

const router = express.Router();

// Ruta principal vista de los productos en tabla
router.get("/", viewProduct);

// Ruta websocket
router.get("/realtimeproducts", realTimeProduct);
router.post("/realtimeproducts", admin, authorize, realTimeAddProduct);
router.delete("/realtimeproducts/:pid", admin, authorize, realTimeDeleteProduct);

export default router;
