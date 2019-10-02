'use strict';

$(function() {
    showResultCards(false);
    showMenuBox(false);
    watchForms();
});
//****************** click listeners & screen switches  **************** */
//****************** click listeners ******************************** */
function watchForms() {
    $('#js-form-zip').submit(event => {
        event.preventDefault();
        const userInput = $('#js-input-zip').val();
        // function below disabled due to Api call limits
        searchZipCode(userInput);
        searchMenu(userInput,1);
    });
}
// Handle page index changeds
function pageItemOnclick(zipCode, i){
    searchMenu(zipCode, i);
}

//****************** screen switches ********************************** */
// when there is no result, all result cards are hidden
function showResultCards(switchOn){
    if(switchOn){
        $('#zip-info-1').show();
        $('#zip-info-2').show();
        $('#zip-info-3').show();
    }else{
        $('#zip-info-1').hide();
        $('#zip-info-2').hide();
        $('#zip-info-3').hide();
    }
}
// When data is fetched menubox is shown when data
function showMenuBox(switchOn){
    if(switchOn){
        $('#menu-section').show();
    }else{
        $('#menu-section').hide();
    }
}