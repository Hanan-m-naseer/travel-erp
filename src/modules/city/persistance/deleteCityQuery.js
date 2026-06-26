export const cityQueries = {
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