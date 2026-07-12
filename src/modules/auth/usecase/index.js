import { getUserEmailDb } from "../persistance/index.js";
import { authEntity,userEntity } from "../entities/index.js";

import loginUsecaseFactory from "./loginUsecase.js";
import logoutUsecaseFactory from "./logoutUsecase.js";
import  signUpUsecaseFactory   from "./signUpUsecase.js";


export const signUpUsecase = signUpUsecaseFactory({ getUserEmailDb, authEntity });


export const loginUsecase = loginUsecaseFactory({ getUserEmailDb,authEntity });
export const logoutUsecase = logoutUsecaseFactory();