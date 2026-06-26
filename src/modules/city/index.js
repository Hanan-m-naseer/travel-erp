import { pool } from '../../config/db.js';
import { cityQueries } from './persistance/deleteCityQuery.js';
import { deleteCityDbFactory } from './persistance/deleteCityDb.js';
import { deleteCityUsecaseFactory } from './usecase/deleteCityUsecase.js';
import { deleteCityControllerFactory } from './controller/deleteCityController.js';


const deleteCityDb = deleteCityDbFactory({ pool, cityQueries });

const deleteCityUsecase = deleteCityUsecaseFactory({ deleteCityDb });

export const deleteCityController = deleteCityControllerFactory({ deleteCityUsecase });