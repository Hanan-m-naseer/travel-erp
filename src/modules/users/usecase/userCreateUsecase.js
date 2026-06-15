import User from '../entities/userEntity.js';

export const createUserUseCaseFactory = ({ createUserDb }) => {
    let id = 1;

    return async (name) => {
        const user = new User({
            id: id++,
            name
        });
        return await createUserDb(user);
    };
};

