import dotenv from 'dotenv';
dotenv.config();

export const config= {
  mongoURI: process.env.MONGO_URI,
  clientId: process.env.client_ID,
  clientSecret: process.env.client_Secret,
  callbackURL: process.env.callback_URL,
  jwtSecret: process.env.JWT_SECRET,
  PORT:process.env.PORT,
  NODE_ENV:process.env.NODE_ENV,
  cookieSecret:process.env.COOKIE_SECRET,
  stripeSecret: process.env.STRIPE_SECRET,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
  SUCCESS_URL: process.env.SUCCESS_URL,
  CANCEL_URL: process.env.CANCEL_URL,
  USER_EMAIL: process.env.USER_EMAIL,
  USER_PASS: process.env.USER_PASS
};
