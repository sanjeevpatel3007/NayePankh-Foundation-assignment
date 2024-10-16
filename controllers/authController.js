import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { NextResponse } from 'next/server';

export const signup = async (req) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.error('Missing required fields');
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      console.warn('User already exists:', email);
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashed successfully.');

    let profileImageUrl = 'https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37100.jpg'; // Default image URL
    if (req.file) {
      profileImageUrl = req.file.path; 
      console.log('Profile image URL:', profileImageUrl);
    } else {
      console.log('No profile image uploaded, using default image.');
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      profileImage: profileImageUrl,
      referralCode: generateReferralCode(), 
    });

    await newUser.save();
    console.log('User saved to the database.');

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log('JWT token created.');

    return NextResponse.json({ result: newUser, token }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Failed to create user', error: error.message }, { status: 500 });
  }
};

export const login = async (req) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return { status: 404, message: 'User not found' };
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return { status: 400, message: 'Invalid credentials' };
    }

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { status: 200, result: user, token };
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error('Login failed');
  }
};
