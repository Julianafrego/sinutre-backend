import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import { authRoutes } from './routes/auth.routes';

export const app = express();

app.use(cors({ origin: env.frontendUrl, credentials: true }));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/auth', authRoutes);
