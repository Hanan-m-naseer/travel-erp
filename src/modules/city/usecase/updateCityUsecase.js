export default function updateCityUsecaseFactory({ updateCityDb, createCityEntity }) {
    return async function updateCityUsecase({ source, ...objCityBodyData }) {
        try{
            //extract the city id from the request body
            const intCityPk =
                objCityBodyData.intPk ||
                objCityBodyData.objCityPk ||
                objCityBodyData.pk ||
                0;

                if (!intCityPk) {
                throw new Error("city id is missing");
                        }
                
            const objCityEntity = createCityEntity(objCityBodyData,source);

            return await updateCityDb({
                strConnection: source.strConnection,
                intCityPk,
                strCity: objCityEntity.getCity(),
                intCountryId: objCityEntity.getCountryId(),
                intStateId: objCityEntity.getIntStateId(),
                strCityCode2: objCityEntity.getCityCode2(),
                intUserId: source.intUserID,
                datModified:objCityBodyData.datModified,
                
                });
        }catch(error){
            throw new Error("update_city_usecase_error: " + error.message);
        
        }
    }
}