'use strict';


module.exports = (error, request, response, next) => {
    console.log('I am an error handler');
    response.status(500);
    response.send('ERROR');
};