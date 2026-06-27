import express from "express";
import makeCallback from "../../common/helpers/makeCallback.js";
import { deleteCityController, createCityController } from "./controller/index.js";

const router = express.Router();

router.delete("/delete_city", makeCallback(deleteCityController));
router.post("/create_city",makeCallback(createCityController));

export default router;