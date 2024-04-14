import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profile: {
    name: { type: String },
    bio: { type: String },
    photo: { type: String },
  },
},{timestamps:true});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.generateToken = function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
  return token;
};

const User = mongoose.model('User', UserSchema);
export default User