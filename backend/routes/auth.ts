import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { AppDataSource } from '../ormconfig';

const authRoutes = Router();

// Register User
authRoutes.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  let user = new User();
  user.email = email;
  user.password = password;
  user.hashPassword();

  await userRepository.save(user);

  res.status(201).json({ message: 'User created!' });
});

// Login User
authRoutes.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email });

  if (!user || !user.checkIfUnencryptedPasswordIsValid(password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

  res.json({ token });
});

export { authRoutes };