import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration - match your frontend URL exactly
app.use(cors({
  origin: 'http://localhost:3000', // Remove the trailing slash
  credentials: true, // Keep this if you're using credentials (e.g., cookies)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Explicitly allow methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));

app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Authentication API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});