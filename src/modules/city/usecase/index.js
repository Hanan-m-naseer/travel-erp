import { deleteCityDb, createCityDb, updateCityDb, getListCityDb } from "../persistance/index.js";
import createCityUsecaseFactory from "./createCityUsecase.js";
import updateCityUsecaseFactory from "./updateCityUsecase.js";
import deleteCityUsecaseFactory from "./deleteCityUsecase.js";
import getListCityUsecaseFactory from "./getListCityUsecase.js";
import { createCityEntity } from "../entities/index.js";


export const deleteCityUsecase = deleteCityUsecaseFactory({ deleteCityDb });
export const createCityUsecase = createCityUsecaseFactory({ createCityDb,createCityEntity });
export const updateCityUsecase = updateCityUsecaseFactory({ updateCityDb, createCityEntity });
export const getListCityUsecase = getListCityUsecaseFactory({ getListCityDb});



