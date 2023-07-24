import nodemailer from "nodemailer";
import { getLogger } from "../utils.js";
const logger = getLogger();
import { config } from "./env.config.js";
const userEmail= config.USER_EMAIL 
const userPass= config.USER_PASS

// Función para enviar el correo electrónico//
export const sendPasswordResetEmail = async (to, resetPasswordLink) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: "casto782@gmail.com",
      to: to,
      subject: "Restablecimiento de contraseña",
      html: `
        <p>Se ha solicitado un restablecimiento de contraseña para tu cuenta.</p>
        <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
        <a href="${resetPasswordLink}">${resetPasswordLink}</a>
        <p>Si no has solicitado este restablecimiento, puedes ignorar este correo electrónico.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    logger.info("Correo electrónico enviado con éxito");
  } catch (error) {
   logger.warning("Error al enviar el correo electrónico", error);
  }
};
export const sendAccountDeletionEmail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: userEmail,
      to: email,
      subject: "Eliminación de cuenta",
      html: `
        <p>Tu cuenta ha sido eliminada debido a la inactividad.</p>
        <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    logger.info("Correo electrónico de eliminación de cuenta enviado con éxito");
  } catch (error) {
    logger.warning("Error al enviar el correo electrónico de eliminación de cuenta", error);
  }
};
export const sendPremiumUserProductDeletedEmail = async (email, productName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: userEmail,
      to: email,
      subject: "Eliminación de producto",
      html: `
        <p>Tu producto "${productName}" ha sido eliminado.</p>
        <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    logger.info("Correo electrónico de eliminación de producto enviado a usuario premium con éxito");
  } catch (error) {
    logger.warning("Error al enviar el correo electrónico de eliminación de producto a usuario premium", error);
  }
};
export const sendPurchaseConfirmationEmail = async (to, ticket) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Contenido del correo electrónico con la información del ticket
    const mailOptions = {
      from: userEmail,
      to: to,
      subject: "Confirmación de compra",
      html: `
        <h2>Gracias por tu compra</h2>
        <p>Detalles del ticket:</p>
        <p>Número de ticket: ${ticket.code}</p>
        <p>Fecha: ${ticket.purchase_datetime}</p>
        <p>Total: ${ticket.amount}</p>
        <!-- Agrega más detalles del ticket si es necesario -->
      `,
    };

    await transporter.sendMail(mailOptions);

    logger.info("Correo electrónico de confirmación de compra enviado con éxito");
  } catch (error) {
    logger.warning("Error al enviar el correo electrónico de confirmación de compra", error);
  }
};