export const objQueries = {
    objFetchUser: {
        strQueryFetchUser: `
        SELECT 
        pk_bint_user_id AS "intUserId",
        str_user_name AS "strUserName",
        str_email AS "strEmail",
        str_password AS "strPassword"
        FROM tbl_user
        WHERE str_email = $1
    `
    },
    objCreateUser:{
        strQueryCreateUser: `
        INSERT INTO tbl_user (
        str_user_name, 
        str_email, 
        str_password 
        )
        VALUES ($1, $2, $3)
        RETURNING 
        pk_bint_user_id AS "intUserId", 
        str_user_name AS "strUserName", 
        str_email AS "strEmail"`
    }

};