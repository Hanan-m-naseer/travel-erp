export function getUserEmailFactory(pool, objQueries) {
    return async function getUserEmailDb({
        strEmail,
    }) {

        const client = await pool.connect();

        try {

            const result = await client.query(
                objQueries.objFetchUser.strQueryFetchUser,
                [strEmail]
            );

            return result.rows[0];

        } catch(error) {

            console.log("getUserEmailDb error", error.message);
            throw error;

        } finally {

            client.release();

        }
    }
}

export function createUserFactory(pool, objQueries) {
    return async function createUserDb({
        strUserName,
        strEmail,
        strPassword
    }) {
        const client = await pool.connect();

        try{
            const result = await client.query(
                objQueries.objCreateUser.strQueryCreateUser,
                [strUserName, strEmail, strPassword]
            );
            return result.rows[0];
        } catch(error) {
            console.log("createUserDb error", error.message);
            throw error;
        } finally {
            client.release();
        }
    }
}