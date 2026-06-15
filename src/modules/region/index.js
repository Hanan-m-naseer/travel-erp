import makeCallback from '../../common/helpers/makeCallback.js';
import express from 'express';
import { getRegionController } from './controller/regionController.js';

const router = express.Router();

router.get('/', makeCallback(getRegionController));

export default router;