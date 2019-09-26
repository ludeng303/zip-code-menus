
'use strict';

// API from https://rapidapi.com

function searchMenu(zipCode){
  let url1 = 'https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/';
  let url2 = '?page=1';
  const url = url1 + zipCode + url2;
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
      "x-rapidapi-key": "2f50b9da63msh084ee8e8713c928p158020jsn62e5f9475ade"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);


  });
  }



// API key + URL from https://www.zip-codes.com/
const zipApiKey = 'RFHNTCY2KK2J45YBFI6U'; 
const zipSearchURL = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/';

function searchZipCode(zipCode) {
    console.log('in the searchZipCode method')
    let str = zipSearchURL + zipCode + '?';
    const url = str + 'key=' + zipApiKey;
  

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayZipResults(responseJson, url))
      .catch(err => {
        $('#js-h3-messege').text(`Something went wrong: ${err.message}`);
      });
  }

  function displayZipResults(responseJson, url) {
    console.log(responseJson.item);
    let str = 'Zip code found in the city of ' +responseJson.item.City;
    $('#js-h3-messege').text(str);
    //$('#js-h3-messege').text(`Zip code found!`);
    $('#js-span-ZipCode').text(''+responseJson.item.ZipCode);
    $('#js-span-AreaLand').text(''+responseJson.item.AreaLand);
    $('#js-span-ZipCodePopulation').text(''+responseJson.item.ZipCodePopulation);
    $('#js-span-region').text(''+responseJson.item.Region);
    $('#js-span-Division').text(''+responseJson.item.Division);
    $('#js-span-State').text(''+responseJson.item.State);
    $('#js-span-CountyName').text(''+responseJson.item.CountyName);
    $('#js-span-CountiesArea').text(''+responseJson.item.CountiesArea);
    $('#js-span-Elevation').text(''+responseJson.item.Elevation);
    $('#js-span-MalePop').text(''+responseJson.item.MalePop);
    $('#js-span-FemalePop').text(''+responseJson.item.FemalePop);
    $('#js-span-WhitePop').text(''+responseJson.item.WhitePop);
    $('#js-span-BlackPop').text(''+responseJson.item.BlackPop);
    $('#js-span-HispanicPop').text(''+responseJson.item.HispanicPop);
    $('#js-span-AsianPop').text(''+responseJson.item.AsianPop);
    $('#js-span-HawaiianPop').text(''+responseJson.item.HawaiianPop);
    $('#js-span-IndianPop').text(''+responseJson.item.IndianPop);
    $('#js-span-OtherPop').text(''+responseJson.item.OtherPop);
    $('#js-span-MedianAge').text(''+responseJson.item.MedianAge);
    $('#js-span-MedianAgeMale').text(''+responseJson.item.MedianAgeMale);
    $('#js-span-MedianAgeFemale').text(''+responseJson.item.MedianAgeFemale);
    $('#js-span-HouseholdsPerZipcode').text(''+responseJson.item.HouseholdsPerZipcode);
    $('#js-span-AverageFamilySize').text(''+responseJson.item.AverageFamilySize);
    $('#js-span-PersonsPerHousehold').text(''+responseJson.item.PersonsPerHousehold);
    $('#js-span-AverageHouseValue').text(''+responseJson.item.AverageHouseValue);
    $('#js-span-IncomePerHousehold').text(''+responseJson.item.IncomePerHousehold);
    $('#js-span-ZIncomePerHouseholdipCode').text(''+responseJson.item.ZIncomePerHouseholdipCode);
    $('#js-span-Bus03Establishments').text(''+responseJson.item.Bus03Establishments);
  };

