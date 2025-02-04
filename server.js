import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: '10mb' }));

// Load routes
app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});