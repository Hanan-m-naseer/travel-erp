export function getListCityControllerFactory({ getListCityUsecase }) {
  return async function getListCityController(httpRequest) {
    try {
      const { body, strConnection, intUserID } = httpRequest;

      console.log("Request Body:", body);
      console.log("Connection:", strConnection);
      console.log("User ID:", intUserID);

      const result = await getListCityUsecase({
        source: {
          strConnection,
          intUserID
        },
        ...body
      });

      // console.log("get city list usecase result(controller):", result);

      return {
        body: result
      };
    } catch (error) {

      console.log("CONTROLLER ERROR TRIGGERED");

      await errorHandler(error, "getListCityController");

      throw error;
    }
  };
}

export function deleteCityControllerFactory({ deleteCityUsecase }) {
  return async function deleteCityController(httpRequest) {
    try {
      console.log("begin delete controller");

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
    } catch (error) {
      console.error("Error in deleteCityController:", error);
      throw error;
    }
  };
}

export function createCityControllerFactory({ createCityUsecase }) {
  return async function createCityController(httpRequest) {
    try {
      console.log("begin create controller");

      const { body, strConnection, intUserID } = httpRequest;

      console.log("Request Body:", body);
      console.log("Connection:", strConnection);
      console.log("User ID:", intUserID);

      const result = await createCityUsecase({
        source: {
          strConnection,
          intUserID
        },
        ...body
      });

      console.log("create city usecase result(controller):", result);

      return {
        body: result
      };
    } catch (error) {
      console.error("Error in createCityController:", error);
      throw error;
    }
  };
}

export function updateCityControllerFactory({ updateCityUsecase }) {
  return async function updateCityController(httpRequest) {
    try {
      const { body, strConnection } = httpRequest;
      const intUserID = httpRequest.intUserId || body.intUserId || null;

      console.log("Request Body:", body);
      console.log("Connection:", strConnection);
      console.log("User ID:", intUserID);

      const result = await updateCityUsecase({
        source: {
          strConnection,
          intUserID
        },
        ...body
      });

      console.log("update city usecase result(controller):", result);

      return {
        body: result
      };
    } catch (error) {
      console.error("Error in updateCityController:", error);
      throw error;
    }
  };
}