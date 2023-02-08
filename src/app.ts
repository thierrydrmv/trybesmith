import express from 'express';
import productsRouter from './routes/productsRoutes';
import userRouter from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(userRouter);

export default app;
