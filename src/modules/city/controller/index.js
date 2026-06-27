import { deleteCityUsecase, createCityUsecase } from "../usecase/index.js";
import { deleteCityControllerFactory, createCityControllerFactory } from "./cityController.js";

export const deleteCityController = deleteCityControllerFactory({ deleteCityUsecase });
export const createCityController = createCityControllerFactory({ createCityUsecase });