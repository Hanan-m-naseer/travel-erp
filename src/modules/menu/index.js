import express from 'express';
import { getMenuController } from './controller/menuController.js';

const router = express.Router();

router.get('/', getMenuController);


export default router;