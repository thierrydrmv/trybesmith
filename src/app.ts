import express from 'express';
import productsRouter from './routes/productsRoutes';
import userRouter from './routes/userRoutes';
import ordersRouter from './routes/ordersRoutes';
import loginRouter from './routes/loginRoutes';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(userRouter);
app.use(ordersRouter);
app.use(loginRouter);

export default app;
