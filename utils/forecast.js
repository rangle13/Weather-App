const request = require('request')
const accessKey = "7f5a8675f97b0111fc311e96e91db737";

const forecast = (latitude, longitude, callback) => {
    location = latitude + ", " + longitude; 
    const url = 'http://api.weatherstack.com/current?access_key=' + accessKey + '&query="' + location + '"&units=f';
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log("In " + body.location.name + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
            callback(undefined, "In " + body.location.name + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast