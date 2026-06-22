import { menuQueries } from "./menuQuery.js";
import { pool } from "../../../config/db.js";

export const getMenuRepo = async () => {
  const result = await pool.query(menuQueries.getMenus);
  return result.rows;
};