export const objQueries = {
  objCreate: {
    strQueryInsertCityTbl:`
    INSERT INTO tbl_city (
    str_city_name,
    fk_bint_country_id,
    fk_bint_state_id,
    fk_bint_created_user_id,
    str_city_code2
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING pk_bint_city_id
    `
  },
  
  objFetchList: {
    strQuerySelectById:`
    SELECT pk_bint_city_id AS "intPk",
           ct.str_city_name AS "strCity",
           ct.fk_bint_country_id AS "intCountryId",
           ct.fk_bint_state_id AS "intStateId",
           ct.str_city_code2 AS "strCityCode2",
           ct.fk_bint_created_user_id AS "intCreatedUserId", 
           ct.fk_bint_modified_user_id AS "intModifiedUserId",
          ct.tim_created AS "datCreated", 
           ut.str_user_name AS "strCreatedUserName",
          ct.tim_modified as "datModified",
            mt.str_user_name AS "strModifiedUserName"
           FROM tbl_city ct

           LEFT JOIN tbl_user ut
           ON ct.fk_bint_created_user_id = ut.pk_bint_user_id

          LEFT JOIN tbl_user mt
          ON ct.fk_bint_modified_user_id = mt.pk_bint_user_id
           WHERE pk_bint_city_id = $1
           AND chr_document_status = 'N'
           
    `,
    strQuerySelectCityList:`
            SELECT
            ct.pk_bint_city_id AS "intPk",
            ct.str_city_name AS "strCity",
            ct.str_city_code2 AS "strCityCode2",
            st.str_state_name AS "strStateName",

            json_build_object(
              'intPk', co.pk_bint_country_id, 
              'strName', co.vchr_country_name
            ) AS "objCountry",

            

          FROM tbl_city ct
          LEFT JOIN tbl_country co
            ON co.pk_bint_country_id = ct.fk_bint_country_id
          

          WHERE ct.chr_document_status = 'N'
          `,
  strQuerySelectCityList: `
          SELECT
          Row_number() OVER({ORDER_BY}) AS "slNo",
          ct.pk_bint_city_id AS "intPk",
          ct.str_city_name AS "strCity",
          ct.str_city_code2 AS "strCityCode2",
          ct.fk_bint_created_user_id AS "intCreatedUserId", 
          ct.fk_bint_modified_user_id AS "intModifiedUserId",
          ct.tim_created AS "datCreated", 
          ct.tim_modified as "datModified",
          json_build_object(
            'intPk', co.pk_bint_country_id,
            'strName', co.vchr_country_name
          ) AS "objCountry",
           json_build_object (
                'intPk', st.pk_bint_state_id,
                'strName', st.str_state_name,
                'strCode', 'abc'
            ) AS "objState",
          count(*) OVER() AS "intTotalCount"
          FROM tbl_city ct
          LEFT JOIN tbl_country co
            ON co.pk_bint_country_id = ct.fk_bint_country_id
            LEFT JOIN tbl_state st 
          ON st.pk_bint_state_id = ct.fk_bint_state_id

          WHERE {WHERE_CONDITION}
          {ORDER_BY}
          {LIMITS}
`
  },

  objUpdate: {

  strQuerySelectUpdatingItem: `
    SELECT
    ct.pk_bint_city_id AS "intPk",
    ct.str_city_name AS "strCity",
    ct.str_city_code2 AS "strCityCode2",
    ct.fk_bint_country_id AS "intCountryId",
    ct.fk_bint_state_id AS "intStateId",

    ct.tim_modified AS "datModified",
    ct.tim_created AS "datCreated",

    cu.str_user_name AS "strCreatedUserName",
    mu.str_user_name AS "strModifiedUserName",

    json_build_object(
      'intPk', co.pk_bint_country_id,
      'strName', co.vchr_country_name
    ) AS "objCountry"

      FROM tbl_city ct

      LEFT JOIN tbl_country co
          ON ct.fk_bint_country_id = co.pk_bint_country_id

      LEFT JOIN tbl_user cu
          ON ct.fk_bint_created_user_id = cu.pk_bint_user_id

      LEFT JOIN tbl_user mu
          ON ct.fk_bint_modified_user_id = mu.pk_bint_user_id

      WHERE ct.chr_document_status = 'N'
        AND ct.pk_bint_city_id = $1;
  `,

  strQueryUpdateNewValues: `
    UPDATE tbl_city SET
      str_city_name         = $1,
      fk_bint_country_id    = $2,
      fk_bint_state_id      = $3,
      str_city_code2        = $4,
      fk_bint_modified_user_id = $5,
      tim_modified          = $6
    WHERE pk_bint_city_id = $7
  `

},
  objDelete: {
    strQuerySoftDeleteCityTbl: `
      UPDATE tbl_city
      SET
        chr_document_status = 'D',
        fk_bint_modified_user_id = $1,
        tim_modified = $2
      WHERE pk_bint_city_id = ANY($3)
        AND chr_document_status = 'N'
    `
  },
  objReference: {
  strQueryCheckCityReference:`
        SELECT 'AIRPORT' AS module,
              COUNT(a.fk_bint_airport_region_id) AS count,
              r.vchr_region_name AS "strName"
        FROM tbl_airport a
        LEFT JOIN tbl_region r
          ON a.fk_bint_airport_region_id = r.pk_bint_region_id
        WHERE a.chr_document_status = 'N'
          AND a.fk_bint_airport_region_id = ANY($1)
        GROUP BY r.vchr_region_name
      `
}

}
