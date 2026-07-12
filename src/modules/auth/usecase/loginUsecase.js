import { jwtSign } from "../../../common/helpers/jwt.js";


export default function loginUsecaseFactory({ getUserEmailDb,authEntity }) {
    return async function loginUsecase({
        strUserName,
        strPassword
    }) {
        try {

            const objLogin = authEntity({
                strUserName,
                strPassword
            });

            const objUser = await getUserEmailDb({
                strUserName: objLogin.getUserEmail()
            });

            if (!objUser) {
                throw new Error("user_not_found");
            }

            console.log("User from DB:", objUser);
            console.log("Entered Password:", objLogin.getPassword());
            console.log("DB Password:", objUser.strPassword);

            if (objUser.strPassword !== objLogin.getPassword()) {
                throw new Error("invalid_password");
            }


            const strAccessToken = jwtSign({
                objPayload: {
                    intUserID: objUser.userId,
                    strUserName: objUser.userName
                },
                strType: "ACCESS"
            });


            const strRefreshToken = jwtSign({
                objPayload: {
                    intUserID: objUser.userId
                },
                strType: "REFRESH"
            });


            return {
              
                strAccessToken,
                strRefreshToken
            };


        } catch(error) {

            throw new Error(
                "login_usecase_error: " + error.message
            );
        }
    };
}