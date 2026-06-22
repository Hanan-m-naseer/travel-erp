export const buildMenu = (rows) => {
  console.log("Usecase started");

  const menuObj = rows.map(row => ({
    id: row.id,
    menu: row.menu_name,
    url: row.url,
    parent_id: row.parent_id,
    arrChild: []
  }));

  console.log("Menu object:", menuObj);

  const getChildren = (parent_id) => {
    const children = menuObj.filter(menu => menu.parent_id === parent_id);

    for (const child of children) {
      child.arrChild = getChildren(child.id);
    }

    return children;
  };

  const result = getChildren(null);

  console.log(
    "final result", JSON.stringify(result, null, 2));

  return result;
};


//without recursion
// export const buildMenu = (rows) => {
  
//   console.log("Usecase started");

//   const menuObj = rows.map(row => ({
//     id: row.id,
//     menu: row.menu_name,
//     url: row.url,
//     parent_id: row.parent_id,
//     arrChild: []
//   }));

//   console.log("Menu object:", menuObj);

//   const result = [];

 
//   for (let i = 0; i < menuObj.length; i++) {
//     const item = menuObj[i];

//     if (item.parent_id) {
//       const parent = menuObj.find(p => p.id === item.parent_id);

//       if (parent) {
//         parent.arrChild.push(item);
//       }
//     } else {
//       result.push(item);
//     }
//   }

//   console.log("final result",JSON.stringify(result, null, 2));

//   return result;
// };

