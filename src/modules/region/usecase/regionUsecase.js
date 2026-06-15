import { getAllRegions } from '../persistance/regionDb.js';

export const getRegionUsecase = () => {
  console.log('Usecase layer ll keri');
  return getAllRegions();
};