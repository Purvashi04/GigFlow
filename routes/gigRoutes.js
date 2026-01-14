import express from "express";
import auth from "../middleware/authMiddleware.js";
import { createGig, getGigs } from "../controllers/gigController.js";

const router = express.Router();
router.get("/", getGigs);
router.post("/", auth, createGig);

export default router;
