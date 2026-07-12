import { loginUsecase, logoutUsecase, signUpUsecase } from "../usecase/index.js";


import { loginControllerFactory, logoutControllerFactory, signUpControllerFactory  } from "./authController.js";



export const loginController = loginControllerFactory({ loginUsecase });
export const logoutController = logoutControllerFactory({ logoutUsecase });
export const signUpController = signUpControllerFactory({ signUpUsecase });