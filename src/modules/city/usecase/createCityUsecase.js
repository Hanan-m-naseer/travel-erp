import createCityEntityFactory from "../entities/cityEntity.js";

const createCityEntity = createCityEntityFactory();

export const createCityUsecaseFactory = ({ createCityDb }) => {

  return async function createCityUsecase({ source, ...objCityBodyData }) {
  
    try {
        console.log("usecase begin");
        console.log("Source:", source);

      const objCityEntity = createCityEntity(objCityBodyData);
      
      const result = await createCityDb({
        strConnection: source.strConnection,
        strCity: objCityEntity.getCity(),
        intCountryId: objCityEntity.getCountryId(),
        intStateId: objCityEntity.getIntStateId(),
        intUserId: source.intUserID,
        strCityCode2: objCityEntity.getCityCode2(),
      });

     console.log("usecase result",result);
      return result;

    }catch (error){
      throw error;
    }
  };
};