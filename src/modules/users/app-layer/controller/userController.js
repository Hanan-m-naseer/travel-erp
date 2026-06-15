
export const createUserController = ({ createUser }) => {
    return async (req, res) => {
        const { name } = req.body;

        const result = await createUser(name);

        res.status(201).json({
            success: true,
            data: result
        });
    };
};

export const getUsersController = ({ getUsers }) => {
    return async (req, res) => {
        const result = await getUsers();

        res.json({
            success: true,
            data: result
        });
    };
};