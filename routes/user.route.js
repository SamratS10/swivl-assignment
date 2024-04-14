import express from "express"
import {register,login,getProfile,updateProfile} from "../controllers/UserController.js"
import {authenticate} from "../middlewars/auth.middleware.js"

const userRouter = express.Router()
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/profile',authenticate, getProfile);
userRouter.put('/profile',authenticate, updateProfile);

export default userRouter;