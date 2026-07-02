export default function deleteCityUsecaseFactory({ deleteCityDb }) {
  return async function deleteCityUsecase({ source, arrPkDelete }) {

    try {

      console.log("usecase begin");
      console.log("Source:", source);
      console.log("arrPkDelete:", arrPkDelete);
      
    //   console.log(source.obj.intUserID);

      if (!arrPkDelete || arrPkDelete.length === 0) {
        console.log("Validation failed: arrPkDelete is empty");
        throw new Error('no cities selected to delete');
      }

      const result = await deleteCityDb({
        strConnection: source?.strConnection,
        arrPkDelete,
        intUserId: source?.intUserID
      });

      console.log("Delete DB Result:", result);

      return result;

    } catch (error) {
      console.log("usecase error", error.message);
      throw error;
    }

  };
}