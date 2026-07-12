import { authEntityFactory, userEntityFactory } from "./authEntity.js";


const authEntity = authEntityFactory();
const userEntity = userEntityFactory();

export { userEntity };

export { authEntity };