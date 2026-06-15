import { getRegionUsecase } from '../usecase/regionUsecase.js';

export const getRegionController = (httpRequest) => {

  console.log('Controller Layer ll ethi');
    // throw new Error('sync error');
    // return Promise.reject(new Error('async error'));
    // throw new Error('async error');
  return getRegionUsecase()
    .then((regions) => {

     
      console.log('usecase ll ulla data kitti', regions);

      return {
        statusCode: 200,
        body: {
          success: true,
          data: regions
        }
      };
    });
};