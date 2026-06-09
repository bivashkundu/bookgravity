import { Router } from "express";
import { pulisherCreate, pulisherDelete, pulishersList, pulisherUpdate } from "../controllers/publishers.controller.js";

const router = Router();

router.route('/').get(pulishersList).post(pulisherCreate);
router.route('/:id').put(pulisherUpdate).delete(pulisherDelete);

export default router;