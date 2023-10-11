import express, { Request, Response } from 'express';
import { getAllUsers, registerUser, userLogIn, deleteUser, updateUser } from '../controllers/userControllers.js'
import { createJWT, verifyJWT } from '../controllers/jwtControllers.js'

export const router = express.Router();

router.get('/getallusers', getAllUsers, (req: Request, res: Response):void => {res.status(200).json(res.locals.allUsers)});
router.post('/registeruser', registerUser, /*createJWT, verifyJWT,*/ (req: Request, res: Response):void => {res.status(200).json('user registered')});
router.post('/userlogin', userLogIn, createJWT, verifyJWT, (req: Request, res: Response):void => {res.status(200).json(res.locals.user)});
router.delete('/deleteuser', deleteUser, (req: Request, res: Response):void => {res.status(200).json('user deleted')});
router.patch('/updateuser', userLogIn, updateUser, (req: Request, res: Response):void => {res.status(200).json(res.locals.user)});