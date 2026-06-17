import { getRegionUsecase } from '../usecase/regionUsecase.js';

export const getRegionController = async (httpRequest) => {

  // try {
    console.log('enterwd into controller Layer ');

    // throw new Error('sync error');
    // return Promise.reject(new Error('async error'));
    // throw new Error('async error');

    const region =  getRegionUsecase();
    console.log('usecase data', region);
    return {
      body: {
        success: true,
        data: region
      }
    };
    // res.status(200).send({
    //   success: true,
    //   data: region
    // });
  // } catch (error) {
  //   console.log('async error', error.message);
  //   res.status(500).send({
  //     success: false,
  //     message: error.message
  //   });
  // }
}

//   console.log('enterwd into controller Layer ');
//   getRegionUsecase()
//     .then((regions) => {

//       console.log('usecase data', regions);

//       res.status(200).json({
//         success: true,
//         data: regions
//       });

//     })
//     .catch((error) => {

//       console.log('error:', error.message);

//       res.status(500).json({
//         success: false,
//         message: error.message
//       });

//     });
// };