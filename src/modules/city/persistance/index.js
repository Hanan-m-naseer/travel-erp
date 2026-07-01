import { pool } from "../../../config/db.js";

import { objQueries } from "./query.js";
import { getListCityDbFactory, 
         createCityDbFactory, 
         deleteCityDbFactory, 
         updateCityDbFactory } from "./cityDb.js";

export const getListCityDb = getListCityDbFactory({ pool, objQueries });
export const createCityDb = createCityDbFactory({ pool, objQueries });
export const deleteCityDb = deleteCityDbFactory({ pool, objQueries });
export const updateCityDb = updateCityDbFactory({ pool, objQueries });