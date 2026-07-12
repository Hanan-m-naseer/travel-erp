import bcrypt from "bcrypt";

export default function signUpUsecaseFactory({ getUserEmailDb, createUserDb }) {
    return async function signUpUsecase({
        strUserName,
        strEmail,
        strPassword
    }) {

        const objExistingUser = await getUserEmailDb({
            strEmail
        });

        if (objExistingUser) {
            throw new Error("Email already exists");
        }

        const strHashedPassword = await bcrypt.hash(
            strPassword,
            10
        );

        const objUser = await createUserDb({
            strUserName,
            strEmail,
            strPassword: strHashedPassword
        });
        
        return objUser;
    };
}