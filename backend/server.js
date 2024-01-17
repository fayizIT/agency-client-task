import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import cors from 'cors';
import agencyRoutes from './routes/agencyRoutes.js';
import clientRoutes from './routes/clientRoutes.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(cookieParser());

app.use('/api/agency', agencyRoutes);
app.use('/api/client', clientRoutes);

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.send('API working');
  });
}

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server is running on ${port}`));
