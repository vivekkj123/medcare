import express from 'express';
import userController from '../controllers/userController.js';
const router = express.Router(); 
router.get('/users/getuser', userController.getUsers);
router.get('/users/registeruser', userController.registerUsers);

export default router; 
