import { Router } from "express";
import { getVacantes } from "../controllers/vacantesController.js";

const router = Router();
router.get("/", getVacantes);

export default router;
