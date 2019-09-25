
'use strict';

// API key + URL from https://www.zip-codes.com/
const zipApiKey = 'RFHNTCY2KK2J45YBFI6U'; 
const zipSearchURL = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/';

// API key + URL from https://rapidapi.com
const menuApiKey = 'RFHNTCY2KK2J45YBFI6U'; 
const menuSearchURL = 'https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/';












var unirest = require("unirest");

var req = unirest("GET", "https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/90210");

req.query({
	"page": "1"
});

req.headers({
	"x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
	"x-rapidapi-key": "2f50b9da63msh084ee8e8713c928p158020jsn62e5f9475ade"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});





function searchMenu(zipCode) {
  console.log('in the searchZipCode method')
  let str = zipSearchURL + zipCode + '?';
  const url = str + 'key=' + zipApiKey;

  console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => storeData(responseJson))
    .catch(err => {
      $('#haha').text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson) {
  console.log(responseJson);
};

















function searchZipCode(zipCode) {
    console.log('in the searchZipCode method')
    let str = zipSearchURL + zipCode + '?';
    const url = str + 'key=' + zipApiKey;
  
    console.log(url);
  
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayZipResults(responseJson, url))
      .catch(err => {
        $('#haha').text(`Something went wrong: ${err.message}`);
      });
  }

  function displayZipResults(responseJson, url) {
    console.log(responseJson);
    console.log(url);
  };

