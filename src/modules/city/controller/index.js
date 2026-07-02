import { deleteCityUsecase, createCityUsecase, updateCityUsecase, getListCityUsecase } from "../usecase/index.js";
import { deleteCityControllerFactory, createCityControllerFactory, updateCityControllerFactory, getListCityControllerFactory } from "./cityController.js";

export const deleteCityController = deleteCityControllerFactory({ deleteCityUsecase });
export const createCityController = createCityControllerFactory({ createCityUsecase });
export const updateCityController = updateCityControllerFactory({ updateCityUsecase });
export const getListCityController = getListCityControllerFactory({ getListCityUsecase });