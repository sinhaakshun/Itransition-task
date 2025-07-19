import express from 'express';
import drugRoutes from './routes/drug.routes';
import cors from 'cors';
import logger from './logger/logger';
import { requestLogger } from './middlewares/logger.middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);


app.use('/api', drugRoutes);

app.use((err: any, req: any, res: any, next: any) => {
    logger.error(`Uncaught Error: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
