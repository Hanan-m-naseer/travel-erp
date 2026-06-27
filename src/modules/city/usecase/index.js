import { deleteCityDb, createCityDb } from "../persistance/index.js";
import { deleteCityUsecaseFactory } from "./deleteCityUsecase.js";
import { createCityUsecaseFactory } from "./createCityUsecase.js";


export const deleteCityUsecase = deleteCityUsecaseFactory({ deleteCityDb });
export const createCityUsecase = createCityUsecaseFactory({ createCityDb });



