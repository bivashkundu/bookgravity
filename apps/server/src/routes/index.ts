import { Router } from 'express';
import bookRouter from './book.routes.js';
import publisherRouter from './publishers.route.js';

const router = Router();

// Mount resources
router.use('/books', bookRouter);
router.use('/publishers', publisherRouter);

export default router;
