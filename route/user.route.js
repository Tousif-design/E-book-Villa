import express from "express";
import { signup, login } from "../controller/user.controller.js"; // Ensure to import the login function
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login); 

export default router;
