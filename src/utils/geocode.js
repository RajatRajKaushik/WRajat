const request = require('postman-request')

const geoCode=(address,callBack)=>{
    const urlg='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicnJrMTAwNTE5OTgiLCJhIjoiY2tybG8wd3RuMGYxajJzbnZtY3hqZGM4NSJ9.9KyL2AHu-yOMdujry4Wrsg&limit=1'
request({url:urlg,json:true}, (error,response)=>{
    if(error) {
callBack('Unable to connect to location Service',undefined)
    }else if(response.body.features.length === 0){
callBack('OOPS No Results Found, Try again with other keywords',undefined)
    }else{
callBack(undefined,{
latitude: response.body.features[0].center[1],
longitude: response.body.features[0].center[0],
location: response.body.features[0].place_name
})
    }
})
}

module.exports= geoCode