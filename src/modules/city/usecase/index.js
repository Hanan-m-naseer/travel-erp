import { deleteCityDb, createCityDb } from "../persistance/index.js";
import { deleteCityUsecaseFactory } from "./deleteCityUsecase.js";
import { createCityUsecaseFactory } from "./createCityUsecase.js";
import { createCityEntity } from "../entities/index.js";


export const deleteCityUsecase = deleteCityUsecaseFactory({ deleteCityDb });
export const createCityUsecase = createCityUsecaseFactory({ createCityDb,createCityEntity });



