import { getMenuRepo } from "../persistance/menuRepo.js";
import { buildMenu } from "../usecase/menuUsecase.js";

export const getMenuController = async (req, res) => {
  try {
    console.log("Controller started");

    const rows = await getMenuRepo();
    console.log("Rows:", rows);

    const result = buildMenu(rows);

    return res.json({
      success: true,
      data: result
    });

  } catch (err) {
    console.log("Error:", err.message);

    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};