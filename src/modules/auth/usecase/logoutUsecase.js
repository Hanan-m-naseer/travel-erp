export default function logoutUsecaseFactory() {

    return async function logoutUsecase() {

        try {
            return {
                strMessage: "Logout successful"
            };

        } catch(error) {
            throw new Error(
                "logout_usecase_error: " + error.message
            );
        }
    };
}