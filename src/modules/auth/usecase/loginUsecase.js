import { jwtSign } from "../../../common/helpers/jwt.js";
import bcrypt from "bcrypt";
import { strPrivateKey } from "../../../config/jwtConfig.js";

export default function loginUsecaseFactory({ getUserEmailDb,authEntity }) {
    return async function loginUsecase({
        strEmail,
        strPassword
    }) {
        try {
                // console.log("Login Usecase: strEmail:", strEmail);
            const objLogin = authEntity({
                strEmail,
                strPassword
            });

            const objUser = await getUserEmailDb({
                strEmail: objLogin.getUserEmail()
            });
          
            if (!objUser) {
                throw new Error("user_not_found");
            }

            // console.log("User from DB:", objUser);
            // console.log("Entered Password:", objLogin.getPassword());
            // console.log("DB Password:", objUser.strPassword);

             const isPasswordValid = await bcrypt.compare(
            strPassword,
            objUser.strPassword
        );

        if (!isPasswordValid) {
            throw new Error("login_usecase_error: invalid_password");
        }

            const strAccessToken = jwtSign({
                objPayload: {
                    intUserID: objUser.intUserId,
                    strEmail: objUser.strEmail
                },
                strType: "ACCESS",
                strPrivateKey
            });


            const strRefreshToken = jwtSign({
                objPayload: {
                    intUserID: objUser.intUserId,
                    strEmail: objUser.strEmail
                },
                strType: "REFRESH",
                strPrivateKey
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