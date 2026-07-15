const strPrivateKey =
    process.env.JWT_PRIVATE_KEY.replace(/\\n/g, "\n");


const strPublicKey =
    process.env.JWT_PUBLIC_KEY.replace(/\\n/g, "\n");


export {
    strPrivateKey,
    strPublicKey
};  