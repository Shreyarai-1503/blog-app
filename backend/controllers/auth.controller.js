import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import upload from '../utils/uploadConfig.js';

// Register controller
export const register = [
  upload.single('profilePicture'),
  async (req, res) => {
    try {
      const { name, email, password, designation } = req.body;

      // Check if all required fields are present
      if (!name || !email || !password || !designation) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        designation,
        image: req.file ? `/uploads/avatars/${req.file.filename}` : null
      });

      // Save user to database
      await newUser.save();

      // Generate JWT token
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.status(201).json({
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          designation: newUser.designation,
          image: newUser.image
        }
      });
    } catch (error) {
      console.error('Server error during registration:', error);
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  }
];

// Login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        designation: user.designation,
        image: user.image
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};
