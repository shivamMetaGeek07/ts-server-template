import express from 'express';
import { getUser } from '@controllers/user/user';
const userRouter = express.Router();

userRouter.get('/getUser', getUser);

export default userRouter;