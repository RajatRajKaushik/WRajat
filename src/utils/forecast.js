const request = require('postman-request')

const forecast =(latitude,longitude,callback)=>{
const urlf='http://api.weatherstack.com/current?access_key=1cdd3644074fcd3064cc56e28b50d739&query=' +latitude+ ',' +longitude+ '&units=f'

request({url:urlf,json:true},(error,response)=>{
if(error){
    callback('OOPS unable to connect weather server',undefined)
}else if(response.body.error){
    callback('OOPS unable to connect find searched location',undefined)
}else{
callback(undefined,response.body.current.weather_descriptions[0] + ' it is currently ' + response.body.current.temperature + ' degrees out.But it really feels like  ' +response.body.current.feelslike +' degrees out!')
}
})
}

module.exports= forecast


// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast