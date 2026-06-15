export const createUserDbFactory = ({ db }) => {
    return async (user) => {
        return db.create(user);
    };
};

export const getUsersDbFactory = ({ db }) => {
    return async () => {
        return db.findAll();
    };
};

