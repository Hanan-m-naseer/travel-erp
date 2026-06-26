export function deleteCityControllerFactory({ deleteCityUsecase }) {
  return async function deleteCityController(httpRequest) {

    console.log("begin controller");

    const { body, strConnection, intUserID } = httpRequest;

    console.log("Request Body:", body);
    console.log("Connection:", strConnection);
    console.log("User ID:", intUserID);

    const result = await deleteCityUsecase({
      source: {
        strConnection,
        intUserID
      },
      arrPkDelete: body.arrPkDelete,
      strReason: body.strReason
    });

    console.log("usecase result:", result);

    return {
      body: result
    };
  };
}