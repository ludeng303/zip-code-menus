
'use strict';

// API from https://rapidapi.com

function searchMenu(zipCode, page){
  let url1 = 'https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/';
  let url2 = '?page=';
  const url = url1 + zipCode + url2 + page;
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
    displayPageNav(response);
    displayMenuCards(response);
  });
}

function displayPageNav(response){
  let numOfPages = response.result.pages;
  let numOfMenus = response.result.totalResults;
  let zipCode = response.result.data[0].address.postal_code;
  let msg = numOfMenus + ' menus on file';
  $('#js-h3-fileMessege').text(msg);
  let htmlStr = `<h2>${numOfMenus} menus on file for zip code [${zipCode}] </h2>`;
  let pageStr = `<p>(50 menus per page)`
  for(let i=0; i<numOfPages; i++){
    let str = `<button class="page-button" onclick="pageItemOnclick(${zipCode},${i+1})">${i+1}</button>`;
    htmlStr += str;
  }
  if(numOfPages>1){
    htmlStr += pageStr;
  }

  document.getElementById('js-page-selector').innerHTML = htmlStr;
}



function displayMenuCards(response){
  showMenuBox(true);
  let numOfMenus = response.result.numResults;
  let htmlStr = ``;
  for(let i=0; i<numOfMenus; i++){
    let name = response.result.data[i].restaurant_name;
    let hours = response.result.data[i].hours;
    let cuisinesStr = "";
    if(response.result.data[i].cuisines.length <= 0){
      cuisinesStr = '********';
    }else{
      cuisinesStr = response.result.data[i].cuisines.join();
    }
    let address = response.result.data[i].address.street;
    let phone = response.result.data[i].restaurant_phone;
    let id = response.result.data[i].restaurant_id;
    let cardHtml = `
        <div class ='menu-cards'>
          <h3>${name}</h3>
          <p>${cuisinesStr}*</p>
          <p>${hours}</p>
          <p>${address}</p>	
          <p>${phone}</p>										
          <p>${id}</p>
         </div>
      `;
      console.log("card finished: "+ cardHtml);
      htmlStr += cardHtml;

  }// end of for loop
  console.log("all cards finished " + htmlStr);
  document.getElementById('card-holder').innerHTML = htmlStr;
}

// API key + URL from https://www.zip-codes.com/
const zipApiKey = 'RFHNTCY2KK2J45YBFI6U'; 
const zipSearchURL = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/';

function searchZipCode(zipCode) {

    let str = zipSearchURL + zipCode + '?';
    const url = str + 'key=' + zipApiKey;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayZipResults(responseJson))
      .catch(err => {
        $('#js-h3-zipMessege').text(`No result found. Please try another zip code.`);
      });
  }

  function displayZipResults(responseJson) {
    console.log(responseJson.item);
    let str = 'Zip code found in the city of ' +responseJson.item.City;
    $('#js-h3-zipMessege').text(str);
    $('#js-ZipCode').text(''+responseJson.item.ZipCode);
    $('#js-AreaLand').text(''+responseJson.item.AreaLand);
    $('#js-ZipCodePopulation').text(''+responseJson.item.ZipCodePopulation);
    $('#js-region').text(''+responseJson.item.Region);
    $('#js-Division').text(''+responseJson.item.Division);
    $('#js-State').text(''+responseJson.item.State);
    $('#js-CountyName').text(''+responseJson.item.CountyName);
    $('#js-CountiesArea').text(''+responseJson.item.CountiesArea);
    $('#js-Elevation').text(''+responseJson.item.Elevation);
    $('#js-MalePop').text(''+responseJson.item.MalePop);
    $('#js-FemalePop').text(''+responseJson.item.FemalePop);
    $('#js-WhitePop').text(''+responseJson.item.WhitePop);
    $('#js-BlackPop').text(''+responseJson.item.BlackPop);
    $('#js-HispanicPop').text(''+responseJson.item.HispanicPop);
    $('#js-AsianPop').text(''+responseJson.item.AsianPop);
    $('#js-HawaiianPop').text(''+responseJson.item.HawaiianPop);
    $('#js-IndianPop').text(''+responseJson.item.IndianPop);
    $('#js-OtherPop').text(''+responseJson.item.OtherPop);
    $('#js-MedianAge').text(''+responseJson.item.MedianAge);
    $('#js-MedianAgeMale').text(''+responseJson.item.MedianAgeMale);
    $('#js-MedianAgeFemale').text(''+responseJson.item.MedianAgeFemale);
    $('#js-HouseholdsPerZipcode').text(''+responseJson.item.HouseholdsPerZipcode);
    $('#js-AverageFamilySize').text(''+responseJson.item.AverageFamilySize);
    $('#js-PersonsPerHousehold').text(''+responseJson.item.PersonsPerHousehold);
    $('#js-AverageHouseValue').text(''+responseJson.item.AverageHouseValue);
    $('#js-IncomePerHousehold').text(''+responseJson.item.IncomePerHousehold);
    $('#js-ZIncomePerHouseholdipCode').text(''+responseJson.item.ZIncomePerHouseholdipCode);
    $('#js-Bus03Establishments').text(''+responseJson.item.Bus03Establishments);
    showResultCards(true);
  };

