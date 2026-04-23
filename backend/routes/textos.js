import { Router } from "express";
import { getTextos, getTexto } from "../controllers/textosController.js";

const router = Router();
router.get("/", getTextos);
router.get("/:pagina/:seccion", getTexto);

export default router;
