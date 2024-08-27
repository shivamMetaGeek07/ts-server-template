import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from '@routes/user/user';

dotenv.config();

const app = express();
const mongoUri = process.env.MONGODB_URI || '';

// Middleware
app.use(express.json());
app.use(cors(
  {
    origin: process.env.CLIENT_URL,
    credentials: true,
  }
));


// Routes
app.use('/api/v1/user', userRouter);

app.use('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB connection
mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

export default app;