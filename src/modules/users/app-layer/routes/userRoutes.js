import express from "express";

export const userRoutes = ({
    createUserController,
    getUsersController
}) => {
    const router = express.Router();

    router.post('/', createUserController);
    router.get('/', getUsersController);

    return router;
};