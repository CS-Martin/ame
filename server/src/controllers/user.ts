import { Request, Response } from 'express';

import { UserService } from '../services'; 

const registerUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newUser = await UserService.register(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser = await UserService.update(Number(id), req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await UserService.get(Number(id));
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

export default {
    registerUser,
    updateUser,
    getUser
}