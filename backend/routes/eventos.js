import { Router } from "express";
import { getEventos } from "../controllers/eventosController.js";

const router = Router();
router.get("/", getEventos);

export default router;
