import { jwtVerify } from "./jwt.js";


export default function authMiddleware(req, res, next) {

    try {

        const strAuthorization =
            req.headers.authorization;


        if (!strAuthorization) {

            return res.status(401).json({
                message: "Token missing"
            });

        }


        const strToken =
            strAuthorization.split(" ")[1];


        if (!strToken) {

            return res.status(401).json({
                message: "Invalid token format"
            });

        }


        const objDecoded = jwtVerify({
            strToken
        });


        req.intUserID = objDecoded.intUserID;
        req.strUserName = objDecoded.strUserName;


        next();


    } catch(error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }

}