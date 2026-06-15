export const userQueries ={
    createUser: `INSERT INTO users (id, name) VALUES ($1, $2) RETURNING *`,
    getAllUsers: `SELECT * FROM users`,
    }