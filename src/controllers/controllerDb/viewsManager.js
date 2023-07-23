import { productModel } from "../../Dao/models/products.js";
import { socketEmit, socketEmitBack } from "../../services/socket.js";
import { sendPremiumUserProductDeletedEmail } from "../../config/nodemailer.config.js";
//vista principal con los productos
const viewProduct = async (req, res) => {
  try {
    await productModel
      .find({})
      .lean()
      .then((products) => {
        res.render("home", { products });
      });
  } catch {
    return res.status(404).send("La ruta no se encontro");
  }
};


const realTimeProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.render("realTimeProducts", { products });
  } catch {
    return res.status(404).send("La ruta no se encontro");
  }
};

const realTimeAddProduct = async (req, res) => {
  const objeto = req.body;
  let products = await productModel.find();
  if (products.some((e) => e.code == objeto.code)) {
    throw new Error("code already entered ");
  }
  try {
    const owner = req.user.email; 
    objeto.owner = owner; 
    const result = await productModel.create(objeto);
    socketEmit("producto", result);
    res.json({ msg: result });
  } catch {
    return res.status(404).send("La ruta no se encontro");
  }
};


const realTimeDeleteProduct = async (req, res) => {
  const pid = req.params.pid;
  const owner = req.user.email;
  try {
    const product = await productModel.findById(pid);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let userRole = req.user.role;

    if (userRole === "premium" && product.owner === owner) {
      
      await deleteProduct(pid, req.user.email, userRole);
      return res.status(200).json({ msg: "Product deleted" });
    } else if (userRole === "admin") {
      
      await deleteProduct(pid, req.user.email, userRole);
      return res.status(200).json({ msg: "Product deleted" });
    } else {
      return res
        .status(403)
        .json({ error: "Unauthorized to delete the product" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(400).json({ error: "Product not deleted" });
  }
};

const deleteProduct = async (productId, userEmail, userRole) => {
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }

    await productModel.deleteOne({ _id: productId });
    await socketEmitBack();

    if (userRole === "premium") {
      const productName = product.title;
      sendPremiumUserProductDeletedEmail(userEmail, productName);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Error deleting product");
  }
};

export {
  viewProduct,
  realTimeProduct,
  realTimeAddProduct,
  realTimeDeleteProduct,
};
