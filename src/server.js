import express from 'express';
import cors from 'cors';
import userRoutes from './modules/users/index.js';
import regionRoutes from './modules/region/index.js';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.use('/region', regionRoutes);

app.get('/', (req,res) =>{
    res.json({
        success: true, 
        message: 'Hello World!'
    });
});

const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});