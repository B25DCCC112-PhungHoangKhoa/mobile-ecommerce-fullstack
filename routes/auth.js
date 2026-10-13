import express from 'express';
const router = express.Router();
import AuthController from "../controllers/AuthController.js";
import passport from "../config/passport.js";
router.get("/login", AuthController.showLoginPage);
router.get("/register", AuthController.showRegisterPage);
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/logout", AuthController.logout);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login",
    session: false
  }),
  (req, res) => {
    req.session.userId = req.user.id;
    res.redirect("/");
  },
);

export default router;
