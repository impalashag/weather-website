const request = require('postman-request');

const foreCast = (latiitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=bc95e16087d3636726d9f6527b9a2a59&query=' + latiitude + ',' + longitude;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect with weather service!', undefined);
        } else if (body.error) {
            console.log('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out.`);
        }
    });
}

module.exports = foreCast;