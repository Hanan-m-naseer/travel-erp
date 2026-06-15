import user from '../entities/userEntity.js';

export const getUsersUseCase = ({ getUsersDb }) => {
    return async () => {
        return await getUsersDb();
    };
};