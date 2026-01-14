import express from "express";
import auth from "../middleware/authMiddleware.js";
import { placeBid, hireBid } from "../controllers/bidController.js";

const router = express.Router();
router.post("/", auth, placeBid);
router.patch("/:bidId/hire", auth, hireBid);

export default router;
