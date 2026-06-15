// users/index.js

import { createUserDbFactory, getUsersDbFactory } from "./persistence/userDb.js";
import { createUserUseCaseFactory } from "./usecase/userCreateUsecase.js";
import { getUsersUseCase } from "./usecase/userGetUsecase.js";
import { createUserController, getUsersController } from "./app-layer/controller/userController.js";
import { userRoutes } from "./app-layer/routes/userRoutes.js";

const db = {
    create: async (data) => data,
    findAll: async () => []
};

// persistence
const createUserDb = createUserDbFactory({ db });
const getUsersDb = getUsersDbFactory({ db });

// usecases
const createUser = createUserUseCaseFactory({ createUserDb });
const getUsers = getUsersUseCase({ getUsersDb });

// controllers
const createUserCtrl = createUserController({ createUser });
const getUsersCtrl = getUsersController({ getUsers });

// routes
const routes = userRoutes({
    createUserController: createUserCtrl,
    getUsersController: getUsersCtrl
});

export default routes;