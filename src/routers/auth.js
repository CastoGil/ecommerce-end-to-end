import express from "express";
import passport from "passport";
import { upload } from "../utils.js";
import { showLoginForm, processLoginForm, closeSession, showRegisterForm, processRegisterForm, showPasswordResetRequestForm, processPasswordResetRequest, showPasswordResetExpiredPage, showPasswordResetForm, processPasswordReset, changeUserRoleController, loadDocuments, getAllUsers, deleteInactiveUsers, getAllUsersAdmin, deleteUserAdmin, updateRole, github } from "../controllers/controllerDb/userController.js";
import { admin,authorize } from "../middlewares/index.js";

const router = express.Router();

// Rutas de Login
router.get("/login", showLoginForm);
router.post("/login", admin, processLoginForm);
router.get("/logout", closeSession);
router.get("/register", showRegisterForm);
router.post("/register", processRegisterForm);

// Rutas de restablecimiento de contraseña
router.get("/password/reset-request", showPasswordResetRequestForm);
router.post("/password/reset-request", processPasswordResetRequest);
router.get("/password/expired", showPasswordResetExpiredPage);
router.get("/password/reset/:token", showPasswordResetForm);
router.post("/password/reset/:token", processPasswordReset);

// Ruta para cambiar el rol de un usuario a "premium"
router.get("/users/premium/:uid", (req, res) => {
  const { uid } = req.params;
  res.render("changeUserRole", { uid });
});
router.post("/users/premium/:uid", changeUserRoleController);

// Ruta para cargar los documentos
router.get("/users/:uid/documents/upload", (req, res) => {
  const { uid } = req.params;
  res.render("upload", { uid });
});
router.post("/users/:uid/documents", upload.fields([
  { name: "profileImage", maxCount: 1 },
  { name: "identification", maxCount: 1 },
  { name: "addressProof", maxCount: 1 },
  { name: "accountProof", maxCount: 1 },
]), loadDocuments);

// Otras rutas
router.get("/current", passport.authenticate("current", { session: false }), (req, res) => {
  res.json(req.user);
});

// Ruta de GitHub
router.get("/github", passport.authenticate("github"));
router.get("/github/callback", passport.authenticate("github", { failureRedirect: "/login" }), github);

// Rutas de usuarios inactivos
router.get("/", getAllUsers);
router.delete("/", deleteInactiveUsers);

// Rutas de administrador
router.get("/admin", admin, authorize, getAllUsersAdmin);
router.post("/admin/delete/:id", admin, authorize, deleteUserAdmin);
router.post("/admin/:id/update-role", admin, authorize, updateRole);

export default router;
