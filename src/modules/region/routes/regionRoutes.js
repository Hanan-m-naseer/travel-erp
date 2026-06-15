import express from 'express';
import makeCallback from './makeCallback.js';
import {
  getRegionController,
} from './regionController.js';

const router = express.Router();


router.post(
  '/get_region',
  makeCallback(getRegionController)
);

export default router;