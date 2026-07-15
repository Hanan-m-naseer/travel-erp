import {pool} from "../../../config/db.js";
import { objQueries } from "./query.js";
import { getUserEmailFactory, createUserFactory } from "./authDb.js";

export const getUserEmailDb = getUserEmailFactory(pool, objQueries);
export const createUserDb = createUserFactory(pool, objQueries);