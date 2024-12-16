import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './interfaces/http/routes/routes';
import sequelize from './config/db';

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
// Use CORS middleware
app.use(cors()); // This will allow all origins

app.use('/v1', routes);

const PORT = process.env.PORT || 3000;

// Sync database and start server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
