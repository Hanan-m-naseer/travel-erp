import jwt from "jsonwebtoken";

const ACCESS_EXP_TIME =
    process.env.ACCESS_EXP_TIME || "15m";


const REFRESH_EXP_TIME =
    process.env.REFRESH_EXP_TIME || "7d";


export const jwtSign = ({
    objPayload,
    strPrivateKey,
    strType = "ACCESS"
}) => {


    const strExpTime =
        strType === "ACCESS"
            ? ACCESS_EXP_TIME
            : REFRESH_EXP_TIME;


    return jwt.sign(
        objPayload,
        strPrivateKey,
        {
            algorithm: "RS256",
            expiresIn: strExpTime
        }
    );
};



export const jwtVerify = ({ strToken, strPublicKey}) => {
    return jwt.verify(
        strToken,
        strPublicKey,
        {
            algorithms: ["RS256"]
        }
    );
};


export const jwtDecode = ({ strToken }) => {
    return jwt.decode(strToken);
};