/**
 * Controller Composition Layer
 * - Injects usecases into controller factories
 * - Exports ready-to-use controllers for routes
 * Flow:
 * Usecase → Injected into Controller Factory → Controller Instance → Exported to Routes
 */
import { deleteCityUsecase, createCityUsecase, updateCityUsecase, getListCityUsecase } from "../usecase/index.js";
import { deleteCityControllerFactory, createCityControllerFactory, updateCityControllerFactory, getListCityControllerFactory } from "./cityController.js";

export const deleteCityController = deleteCityControllerFactory({ deleteCityUsecase });
export const createCityController = createCityControllerFactory({ createCityUsecase });
export const updateCityController = updateCityControllerFactory({ updateCityUsecase });
export const getListCityController = getListCityControllerFactory({ getListCityUsecase });