export const menuQueries = {
  getMenus: `
    SELECT 
      c.id,
      c.name AS menu_name,
      c.parent_id,
      c.url
    FROM menus c
    LEFT JOIN menus p ON c.parent_id = p.id
  `
};