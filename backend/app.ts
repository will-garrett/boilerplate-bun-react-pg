import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './ormconfig';
import { authMiddleware } from './middlewares/auth';
import { authRoutes } from './routes/auth';
import { dashboardRoutes } from './routes/dashboard';

AppDataSource.initialize()
  .then(() => {
    const app = express();

    // Middleware
    app.use(bodyParser.json());

    // Public Routes
    app.use('/auth', authRoutes);

    // Protected Routes
    app.use('/api', authMiddleware, dashboardRoutes);

    // Start server
    app.listen(4000, () => {
      console.log('Backend running on port 4000');
    });
  })
  .catch(error => console.log(error));