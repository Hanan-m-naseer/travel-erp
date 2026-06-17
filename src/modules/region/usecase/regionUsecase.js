import { getAllRegions } from '../persistance/regionDb.js';

export const getRegionUsecase = async() => {
  console.log('Usecase layer entered');

  // both below are rejected promise
  // throw new Error('async error');
//   return Promise.reject(
//   new Error('DB Failed')
// );
  return getAllRegions();
};