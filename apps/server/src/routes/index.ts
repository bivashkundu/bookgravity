import { Router } from 'express';
import bookRouter from './book.routes.js';
import publisherRouter from './publishers.route.js';
import sectionHeadingRouter from './sectionHeading.route.js';

const router = Router();

// Mount resources
router.use('/books', bookRouter);
router.use('/publishers', publisherRouter);
router.use('/section-headings', sectionHeadingRouter);

export default router;
