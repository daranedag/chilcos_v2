import { Router } from "express";
import { getAllStaff } from "../controllers/staffController.js";

const router = Router();
router.get("/", getAllStaff);

export default router;
