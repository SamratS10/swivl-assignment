import User from "../schemas/User.model.js"
import bcrypt from "bcrypt"
import { validateLoginData,validateRegistrationData } from "../utils/validation.js";

export const register = async (req, res) => {
  const { errors, isValid } = validateRegistrationData(req.body);

  if (!isValid) return res.status(401).json({message:errors});

  const existingUser = await User.findOne({ email: req.body.email });

  if (existingUser) return res.status(401).json({ email: 'Email already exists' });

  const user = new User(req.body);

  try {
    const savedUser = await user.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json({message:err.message});
  }
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(401).json({ message: 'Invalid email please register' });

  const isPasswordValid = await user.comparePassword(req.body.password);

  if (!isPasswordValid)
    return res.status(401).json({ password: 'Invalid password' });

  const token = user.generateToken();
  return res.status(201).json({token:token})
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({message:err.message});
  }
};

export const updateProfile = async (req, res) => {
  try {
    let hashPassword
    const {password} = req.body;
    if(password.length<6){
        return res.status(401).json({message:"Password must be at least 6 characters"})
    }
    if(password){
        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(password,salt)
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {username:req.body.username,password:hashPassword,email:req.body.email},
      { new: true }
    );
    return res.status(201).json(updatedUser);
  } catch (err) {
    return res.status(500).json({message:err.message});
  }
};