import { Router } from "express";
import { sectionHeadingList, sectionHeadingGetByKey, sectionHeadingUpsert } from "../controllers/sectionHeading.controller.js";

const router = Router();

router.route('/').get(sectionHeadingList).post(sectionHeadingUpsert);
router.route('/:sectionKey').get(sectionHeadingGetByKey);

export default router;
