export  function authEntityFactory(){
return function authEntity({
        strEmail = '',
        strPassword = ''
    } = {}) {


        if(!strEmail)
            throw new Error("email missing");


        if(!strPassword)
            throw new Error("password missing");


        return Object.freeze({
            getUserEmail: () => strEmail.trim(),
            getPassword: () => strPassword

        });
    };
}

export  function userEntityFactory(){
return function userEntity({
        strUserName = '',
        strEmail = '',
        strPassword = ''
    } = {}) {

        if(!strUserName)
            throw new Error("username missing");

        if(!strEmail)
            throw new Error("email missing");

        if(!strPassword)
            throw new Error("password missing");

        return Object.freeze({
            getUserName: () => strUserName.trim(),
            getEmail: () => strEmail.trim(),
            getPassword: () => strPassword

        });

    };

}