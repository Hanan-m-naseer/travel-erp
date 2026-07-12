import {pool} from "../../../config/db.js";
import { objQueries } from "./query.js";
import { getUserEmailFactory } from "./authDb.js";

export const getUserEmailDb = getUserEmailFactory(pool, objQueries);