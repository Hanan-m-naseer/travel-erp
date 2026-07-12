import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const ACCESS_EXP_TIME = process.env.ACCESS_EXP_TIME || "15m";
const REFRESH_EXP_TIME = process.env.REFRESH_EXP_TIME || "7d";


export const jwtSign = ({ objPayload, strType = "ACCESS"}) => {

    const strExpTime =
        strType === "ACCESS"
            ? ACCESS_EXP_TIME
            : REFRESH_EXP_TIME;


    return jwt.sign(
        objPayload,
        JWT_SECRET,
        {
            expiresIn: strExpTime
        }
    );
};

export const jwtVerify = ({strToken}) => {
    return jwt.verify(
        strToken,
        JWT_SECRET
    );
};


export const jwtDecode = ({strToken}) => {
    return jwt.decode(strToken);
};