import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './interfaces/http/routes/authRoutes';

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());

app.use('/v1', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
