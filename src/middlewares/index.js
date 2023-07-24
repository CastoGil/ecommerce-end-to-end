import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { config } from "../config/env.config.js"
const JWT_SECRET = config.jwtSecret;
const ADMIN_EMAIL = config.adminEmail;
const ADMIN_PASSWORD = config.adminPassword;

export const admin = (req, res, next) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    req.user = { role: "admin" };
    res.cookie("role", "admin", { httpOnly: true });
    return res.redirect("/api/products?sort=asc");
  }
  req.user = { role: "user" };
  next();
};

///
export const authorize = (req, res, next) => {
  const role = req.cookies.role;
  const token = req.cookies.token;
  if (req.originalUrl === "/auth/admin") {
    if (role && role === "admin") {
      req.user = { role: "admin" };
      return next();
    } else {
      return res
        .status(401)
        .json({ error: "No tienes permiso para realizar esta acción" });
    }
  } else if (
    req.originalUrl.includes("/api/products") ||
    req.originalUrl.includes("/realtimeproducts")
  ) {
    if (role && role === "admin") {
      req.user = { role: "admin" };
      return next();
    } else if (token) {
      try {
        const user = jwt.verify(token, JWT_SECRET);
        if (user.role === "premium") {
          req.user = { role: "premium", email: user.email };
          return next();
        } else {
          return res
            .status(401)
            .json({ error: "No tienes permiso para realizar esta acción" });
        }
      } catch (err) {
        return res
          .status(401)
          .json({ error: "No tienes permiso para realizar esta acción" });
      }
    } else {
      return res
        .status(401)
        .json({ error: "No tienes permiso para realizar esta acción" });
    }
  } else if (
    req.originalUrl.includes("/api/carts") ||
    req.originalUrl.includes("/chat")
  ) {
    if (token) {
      try {
        const user = jwt.verify(token, JWT_SECRET);
        if (user.role === "premium") {
          req.user = { role: "premium", email: user.email };
          return next();
        } else if (user.role === "usuario") {
          req.user = { role: "usuario", email: user.email };
          return next();
        } else {
          return res
            .status(401)
            .json({ error: "No tienes permiso para realizar esta acción" });
        }
      } catch (err) {
        return res
          .status(401)
          .json({ error: "No tienes permiso para realizar esta acción" });
      }
    } else {
      return res
        .status(401)
        .json({ error: "No tienes permiso para realizar esta acción" });
    }
  }

  next();
};
