export default function createCityEntityFactory(){
    return function createCityEntity({
        strCity = '',
        objCountry = { intPk: 0 },
        intStateId = null,
        strCityCode2 = '',
        } = {},
        { OwnRequest = false }={}
    ){
        try{
            if(!strCity)
                throw new Error("city name is missing");
            if(!objCountry?.intPk)
                throw new Error("country missing");
            if(!strCityCode2)
                throw new Error("City Code missing");

           return Object.freeze({
            getCity:       () => strCity.trim(),                   
            getCountryId:  () => Number(objCountry['intPk']),    
            getIntStateId: () => intStateId || 1,                
            getCityCode2:  () => strCityCode2.trim()
      });

        }catch(error){
            throw error;
        }
    }

}