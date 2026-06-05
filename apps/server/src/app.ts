import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Main API routes
app.use('/api/v1', routes);

// Base route response
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to BookGravity API' });
});

// Error handling middleware
app.use(errorMiddleware);

export default app;
