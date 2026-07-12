import { errorHandler } from "./errorHandler.js";

import express from 'express';

function makeCallback(controller) {

  return async (req, res) => {

    console.log('request received');

    try {
      //create the httpRequest object
      const httpRequest = {
        body: req.body,
        strConnection: req.headers['x-connection'] || 'test:1',
        intUserID: Number(req.headers['x-user-id']) || 0,
      };

      console.log('httpRequest created:');
      console.log(httpRequest);

      console.log('Calling controller...');

      //pass the httpRequest object to the controller 
      const response = await controller(httpRequest);
      console.log('controller response', response);

      //extract the response object and send the response
      const {
        body,
        statusCode = 200,
        headers = { 'Content-Type': 'application/json' }
      } = response;
      res.set(headers);
      res.status(statusCode).send(body);

      console.log('Response sent successfully');

      

    } catch (error) {

      console.log('async error', error.message);

      // await errorHandler(error, "Make Callback");

      res.status(500).send({
        success: false,
        message: error.message
      });
    }
  };
}


export default makeCallback;

//         .then((response) => {

//           console.log('Controller returned res converting to exp');
//           console.log(response);

//           const {
//             body,
//             statusCode = 200,
//             headers = { 'Content-Type': 'application/json' }
//           } = response;

//           console.log('Response Headers:', headers);
//           console.log('Response Status:', statusCode);
//           console.log('Response Body:', body);

//           res.set(headers);
//           res.status(statusCode);
//           res.send(body);

//           console.log('Response sent successfully');
//         })

//         .catch((error) => {

//   console.log('async error', error.message);

//   res.status(500).send({
//     success: false,
//     message: error.message
//   });
// });