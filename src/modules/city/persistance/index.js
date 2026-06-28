import { pool } from "../../../config/db.js";

import { cityQueries } from "./query.js";
import { cityDbFactory } from "./cityDb.js";

const createCityDb = createCityDbFactory({
    pool,
    objQueries
});

const deleteCityDb = deleteCityDbFactory({
    pool,
    objQueries
});

export {
  createCityDb,
  deleteCityDb
};