export function getListCityControllerFactory({ getListCityUsecase }) {
  return async function getListCityController(httpRequest) {

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
    console.log("get city list usecase result(controller):", result);

    return {
      body: result
    };  
  }
}


export function deleteCityControllerFactory({ deleteCityUsecase }) {
  return async function deleteCityController(httpRequest) {

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
  };
}


export function createCityControllerFactory({ createCityUsecase }) {
  return async function createCityController(httpRequest) {

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
  };
}

export function updateCityControllerFactory({ updateCityUsecase }) {
  return async function updateCityController(httpRequest) {

    const { body, strConnection, intUserID } = httpRequest;

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
  }
}