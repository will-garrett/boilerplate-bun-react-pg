import { Router } from 'express';

const dashboardRoutes = Router();

dashboardRoutes.get('/dashboard', (req, res) => {
  res.json({ message: 'Welcome to the dashboard, authenticated user!' });
});

export { dashboardRoutes };