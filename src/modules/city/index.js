import express from "express";
import makeCallback from "../../common/helpers/makeCallback.js";
import { deleteCityController, createCityController, updateCityController, getListCityController } from "./controller/index.js";

const router = express.Router();

router.delete("/delete_city", makeCallback(deleteCityController));
router.post("/create_city",makeCallback(createCityController));
router.put("/update_city", makeCallback(updateCityController));
router.post("/get_city_list", makeCallback(getListCityController));
export default router;