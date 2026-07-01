import express from "express";
import makeCallback from "../../common/helpers/makeCallback.js";
import { deleteCityController, createCityController, updateCityController, getCityListController } from "./controller/index.js";

const router = express.Router();

router.delete("/delete_city", makeCallback(deleteCityController));
router.post("/create_city",makeCallback(createCityController));
router.put("/update_city", makeCallback(updateCityController));
router.get("/get_city_list", makeCallback(getCityListController));
export default router;