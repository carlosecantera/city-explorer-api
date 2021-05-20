'use strict';

// const { response } = require('express');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3030;




app.use(cors());

const weather = require('./Data/weather.json');


app.get('/', (request, response) => {

  response.send('Welcome to My Server');

});

// Create an API endpoint of `/weather` that processes a `GET` request that contains `lat`, `lon` and `searchQuery` information.

app.get('/weather', (request, response) => {
  let lat = request.query.lat;
  let lon = request.query.lom;
  let searchQuery = request.query.searchQuery;
  
  // Use the .find() method to discover which city the `lat`, `lon` and `searchQuery` information belong to. If the user did not search for one of the three cities that we have information about (Seattle, Paris, or Amman), return an error.

  const city = weather.find(city => city.city_name.toLowerCase() == searchQuery.toLowerCase());
  try{
    const weatherArray = city.data.map(day => new Forcast(day));
    response.status(200).send(weatherArray);
    
  } catch(error){
    response.status(400).send('City Not Found');
  }
});

// To do create constructor function for forcast (day) date description

app.listen(PORT, () => console.log('Server is running'));