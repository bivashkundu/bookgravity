import app from './app.js';
import { environment } from './config/environment.js';

const { PORT, NODE_ENV } = environment;

app.listen(PORT, () => {
  console.log(`🚀 Server running in ${NODE_ENV} mode on port ${PORT}`);
});
