export function signUpControllerFactory({ signUpUsecase }) {

    return async function signUpController(httpRequest) {

        try {

            const { body } = httpRequest;

            const result = await signUpUsecase({
                ...body
            });

            return {
                body: result
            };

        } catch(error) {

            console.log("SIGNUP CONTROLLER ERROR:", error);

            throw error;
        }
    };
}

export function loginControllerFactory({ loginUsecase }) {
    return async function loginController(httpRequest) {
        try {
            const { body } = httpRequest;

            const result = await loginUsecase({
                strEmail: body.strEmail,
                strPassword: body.strPassword
            });
            return {
                body: result
            };

        } catch(error) {
            console.error("Login Controller Error:", error);
            throw error;
        }
    };
}

export function logoutControllerFactory({ logoutUsecase }) {
    return async function logoutController(httpRequest) {

        try {
            const result = await logoutUsecase();

            return {
                body: result
            };

        } catch(error) {
            console.error("Logout Controller Error:", error);
            throw error;
        }
    };
}

