import { Router } from 'express';

import { UserController } from '../controllers';

const userRouter = Router();

userRouter.post('/register', UserController.registerUser);
userRouter.put('/update/:id', UserController.updateUser);
userRouter.get('/:id', UserController.getUser);

export default userRouter;