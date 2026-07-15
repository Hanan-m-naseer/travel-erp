import { jwtVerify } from "./jwt.js";

import { strPublicKey } from "../../config/jwtConfig.js";




export default function authMiddleware(req, res, next) {

    try {
        const strAuthorization =
            req.headers.authorization;
            console.log(
    "PUBLIC KEY LOADED:",
    strPublicKey?.slice(0,50)
);


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
            strToken,
            strPublicKey
        });

        req.intUserID = objDecoded.intUserID;
        req.strEmail = objDecoded.strEmail;

        next();

    } catch(error) {

    console.log("JWT VERIFY ERROR:", error);

    return res.status(401).json({
        message: error.message
    });



    }

}