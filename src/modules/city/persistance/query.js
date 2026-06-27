export const cityQueries = {

  createCity: `
  INSERT INTO tbl_city (
    str_city_name,
    fk_bint_country_id,
    fk_bint_state_id,
    fk_bint_created_user_id,
    str_city_code2,
    str_city_code3
  )
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING pk_bint_city_id;
`,

  deleteCity: `
    UPDATE tbl_city
    SET
      chr_document_status = 'D',
      fk_bint_modified_user_id = $1,
      tim_modified = $2
    WHERE pk_bint_city_id = ANY($3)
      AND chr_document_status = 'N'
  `
};