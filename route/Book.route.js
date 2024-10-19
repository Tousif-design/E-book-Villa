import express from "express";
import { getSemester } from "../controller/book.controler.js"; // Ensure correct path to your controller

const router = express.Router();

router.get("/", getSemester); // GET request to fetch semesters

export default router;
