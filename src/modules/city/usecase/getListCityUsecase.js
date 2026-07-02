export default function getListCityUsecaseFactory({ getListCityDb }) {
    return async function getListCityUsecase({
        source: { strConnection = 0 } = {},
        objPagination: { intPageOffset = 0, intPerPage = 50 } = {},
    objSort: { active = 'slNo', direction = 'asc' } = {},
    objFilter: {
      strCityName = '',
      objCountry: { intPk: intFilterCountry = 0 } = {},
      objState: { intPk: intFilterState = 0 } = {}
    } = {}
  } = {}){
    try{
          const objSortActiveKeys = {
        slNo: 'ct.pk_bint_city_id',
        strCityName: 'ct.str_city_name',
        strCityCode2: 'ct.str_city_code2',
        objCountry: 'co.vchr_country_name',
        objState: 'st.vchr_state_name'
      };

      const intOffset = intPageOffset * intPerPage;

       const arrList = await getListCityDb({
        strConnection,

        intOffset: intOffset,
        intLimit: intPerPage,

        strSortBy: objSortActiveKeys[active] || 'ct.str_city_name',
        strSortOrder: direction,

        intFilterCountry,
        intFilterState,
        strFilterCity: strCityName
        });
            
    const intTotalCount = arrList?.intTotalCount || 0;
    return {
        objPagination: {
            intPerPage,
            intPageOffset,
            intTotalCount
        },
        arrList: arrList.arrList,
        objSort: {
            active,
            direction
        }
        };
    } catch (error) {
      throw new Error("get_list_city_usecase_error: " +error.message);
    }
  };
}