export const cityDbFactory = ({ pool, cityQueries }) => {

  const createCityDb = async ({
    strConnection,
    strCity,
    intCountryId,
    intStateId,
    intUserId,
    strCityCode2,
    strCityCode3
  }) => {

    const client = await pool.connect();

    try {

      const result = await client.query(
        cityQueries.createCity,
        [
          strCity,
          intCountryId,
          intStateId,
          intUserId,
          strCityCode2,
          strCityCode3
        ]
      );

      return {
        pkCityId: result.rows[0].pk_bint_city_id
      };

    } finally {
      client.release();
    }
  };

  const deleteCityDb = async ({
    strConnection,
    arrPkDelete,
    intUserId
  }) => {

    const client = await pool.connect();

    try {

      const result = await client.query(
        cityQueries.deleteCity,
        [
          intUserId,
          new Date(),
          arrPkDelete
        ]
      );

      if (result.rowCount === 0) {
        return {
          intAffectedRows: 0,
          strMessage: "city not found"
        };
      }

      return {
        intAffectedRows: result.rowCount,
        strMessage: "City deleted successfully"
      };

    } finally {
      client.release();
    }
  };


  return {
    createCityDb,
    deleteCityDb
  };
};