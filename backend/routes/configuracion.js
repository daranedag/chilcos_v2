import { Router } from "express";
import {
    getConfiguracion,
    getConfiguracionByKey,
} from "../controllers/configuracionController.js";

const router = Router();
router.get("/", getConfiguracion);
router.get("/:clave", getConfiguracionByKey);

export default router;
