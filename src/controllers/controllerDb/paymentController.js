import Stripe from "stripe";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { ticketService } from "../../services/ticketService.js";
import { sendPurchaseConfirmationEmail } from "../../config/nodemailer.config.js";

dotenv.config();
const STRIPE_SECRET = process.env.STRIPE_SECRET;
const stripe = new Stripe(STRIPE_SECRET);
const JWT_SECRET = process.env.JWT_SECRET;

export const createSession = async (req, res) => {
  const { cartProducts } = req.body;
  const lineItems = cartProducts.map((product) => ({
    price_data: {
      product_data: {
        name: product.title,
        description: product.description,
      },
      currency: "usd",
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  try {
  
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:8080/api/payments/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:8080/api/payments/cancel",
    });
    if (!session || !session.id) {
      return res.status(500).json({ error: "Error al crear la sesión de pago" });
    }
    return res.json(session);
  } catch (error) {
    console.error("Error al crear la sesión de Stripe:", error);
    return res.status(500).json({ error: "Error al crear la sesión de pago" });
  }
};

export const handleSuccess = async (req, res) => {
  try {
   
    const sessionId = req.query.session_id;
    if (!sessionId) {
      return res.status(400).render("error", { error: "ID de sesión no proporcionado" });
    }
    
    const session = await stripe.checkout.sessions.retrieve(sessionId);

  
    if (session.payment_status === "paid") {
      
      const token = req.cookies.token;
      const user = jwt.verify(token, JWT_SECRET);

      
      const ticket = await ticketService.createTicket(user.email, session.amount_total / 100);
      await sendPurchaseConfirmationEmail(user.email, ticket);

     
      return res.render("success");
    } else {
     
      return res.redirect("/api/payments/cancel");
    }
  } catch (error) {
    console.error("Error al procesar la transacción:", error);
    return res.status(500).render("error", { error: "Error al procesar la transacción" });
  }
};

export const handleCancel = async (req, res) => {
  try {
    res.render("cancel");
  } catch (error) {
    console.error("Error al manejar la cancelación:", error);
    res.status(500).render("error", { error: "Error al manejar la cancelación" });
  }
};

