import { Router } from 'express';
import { getDashboard } from '../controllers/dashboard';

const apiRoutes = Router();

// Public Route
apiRoutes.get('/landing', (req, res) => {
  res.json({ message: 'Welcome to the landing page!' });
});

// Protected Route
apiRoutes.get('/dashboard', getDashboard);

export { apiRoutes };