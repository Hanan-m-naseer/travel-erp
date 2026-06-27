import { pool } from "../../../config/db.js";

import { cityQueries } from "./query.js";
import { cityDbFactory } from "./cityDb.js";

const { createCityDb, deleteCityDb } = cityDbFactory({
  pool,
  cityQueries
});

export {
  createCityDb,
  deleteCityDb
};