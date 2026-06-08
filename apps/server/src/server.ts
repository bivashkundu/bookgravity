import app from './app.js';
import { environment } from './config/environment.js';
import dbConnect from './config/dbConnect.js';

const { PORT, NODE_ENV } = environment;

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running in ${NODE_ENV} mode on port ${PORT}`);
  });
});
