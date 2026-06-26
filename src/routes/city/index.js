import express from 'express';
import makeCallback from '../../common/helpers/makeCallback.js';
import { deleteCityController } from '../../modules/city/index.js';

const router = express.Router();

router.delete('/delete_city', makeCallback(deleteCityController));

export default router;