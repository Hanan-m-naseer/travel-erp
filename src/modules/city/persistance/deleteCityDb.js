

export function deleteCityDbFactory({ pool, cityQueries }) {
  return async function deleteCityDb({
    strConnection,
    arrPkDelete,
    intUserId
  }) {
    const client = await pool.connect();

    try {
      const result = await client.query(cityQueries.deleteCity, [
        intUserId,
        new Date(),
        arrPkDelete
      ]);
      if (result.rowCount === 0) {
        return {
            intAffectedRows: 0,
            strMessage: 'city not found'
        };
        }
      return {
        intAffectedRows: result.rowCount,
        strMessage: 'City Deleted Succesfully'
      };
    } finally {
      client.release();
    }
  };
}