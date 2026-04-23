import { Router } from "express";
import { getDocumentos } from "../controllers/documentosController.js";

const router = Router();
router.get("/", getDocumentos);

export default router;
