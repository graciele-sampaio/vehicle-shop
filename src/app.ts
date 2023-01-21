import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './routes/Car.routes';
import motoRoutes from './routes/Motorcycle.routes';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motoRoutes);
app.use(ErrorHandler.handle);

export default app;
