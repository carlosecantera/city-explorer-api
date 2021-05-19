'use strict';

// const { response } = require('express');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());

let weather = require('./Data/weather.json');


app.get('/', (request, response) => {

  response.send('Welcome to My Server');

});

app.get('/weather', (request, response) => {
  
  const data = [
    'lat',
    'lon',
    'searchQuery'
  ]
  
  // weather.find(findWeather)

  // function findWeather(lat, data){
  //   return lat === 'lat';
  // }
  // console.log(data);

  response.json(data);
  weather.json(data);
});

app.listen(PORT, () => console.log('Server is running'));