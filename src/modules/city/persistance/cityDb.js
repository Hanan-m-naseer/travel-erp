export function getListCityDbFactory({ pool, objQueries }) {
  return async function getListCityDb({
    strConnection,
    intOffset = 0,
    intLimit = 10,
    strSearch = '',
    intCountryId = 0,
    strSortBy = 'ct.str_city_name',
    strSortOrder = 'ASC'
  }) {

    const objReplaceKeys = {
      '{WHERE_CONDITION}': "ct.chr_document_status = 'N'",
      '{ORDER_BY}': `ORDER BY ${strSortBy} ${strSortOrder}`,
      '{LIMITS}': `LIMIT ${intLimit} OFFSET ${intOffset}`
    };

    const arrParams = [];
    let intPos = 1;

    if (intCountryId) {
      objReplaceKeys['{WHERE_CONDITION}'] += ` AND ct.fk_bint_country_id = $${intPos}`;
      arrParams.push(intCountryId);
      intPos++;
    }

    if (strSearch) {
      objReplaceKeys['{WHERE_CONDITION}'] += ` AND ct.str_city_name ILIKE $${intPos}`;
      arrParams.push(`%${strSearch}%`);
      intPos++;
    }

    const client = await pool.connect();

    try {
      const result = await client.query(
        objQueries.objFetchList.strQuerySelectCityList,
        arrParams
      );
      return {
        arrList: result.rows,
        intTotalCount: result.rows.length > 0 ? result.rows[0].intTotalCount : 0
      };

    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  };
}

export function createCityDbFactory({ pool, objQueries }) {
  return async function createCityDb({
    strCity,
    intCountryId,
    intStateId,
    intUserId,
    strCityCode2
  }) {

    const client = await pool.connect();

    try {

      const insertResult = await client.query(
        objQueries.objCreate.strQueryInsertCityTbl,
        [
          strCity,
          intCountryId,
          intStateId,
          intUserId,
          strCityCode2
        ]
      );

      const intPk = insertResult.rows[0].pk_bint_city_id;

      const detail = await client.query(
        objQueries.objFetchList.strQuerySelectCityById,
        [intPk]
      );
      return {
        strMessage: "created succesfully",
        objCity: detail.rows[0]
      };

    } catch (error) {
  if (error.constraint) {
    throw new Error('create_city_db_error');
  }

  throw error;
  }finally {
      client.release();
    }
  };
}

export function deleteCityDbFactory({ pool, objQueries }) {
  return async function deleteCityDb({
    strConnection,
    arrPkDelete,
    intUserId
  }) {
    const client = await pool.connect();

    try {

      // 1. Reference check (NEW)
      const refCheck = await client.query(
        objQueries.objReference.strQueryCheckCityReference,
        [arrPkDelete]
      );

      let arrBrokenModules = [];

      for (const row of refCheck.rows) {
        if (Number(row.count) > 0) {
          arrBrokenModules.push(row.module);
        }
      }

      if (arrBrokenModules.length > 0) {
        return {
          intAffectedRows: 0,
          strMessage: "city is already used",
          arrModules: arrBrokenModules
        };
      }

      const result = await client.query(
        objQueries.objDelete.strQuerySoftDeleteCityTbl,
        [
          intUserId,
          new Date(),
          arrPkDelete
        ]
      );

      if (result.rowCount === 0) {
        return {
          intAffectedRows: 0,
          strMessage: "City not found"
        };
      }

      return {
        intAffectedRows: result.rowCount,
        strMessage: "City deleted successfully"
      };
      

    } catch (error) {
      if (error.constraint) {
        throw new Error("delete_city_db_error");
      }

      throw error;

    } finally {
      client.release();
    }
  };
}

