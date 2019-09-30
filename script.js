'use strict';

//****************** click listeners & screen switches  **************** */
//****************** click listeners ******************************** */
function watchForms() {
    $('#js-form-zip').submit(event => {
        event.preventDefault();
        const userInput = $('#js-input-zip').val();
        searchZipCode(userInput);
        searchMenu(userInput,1);
    });
}
$(function() {
    showResultCards(false);
    showMenuBox(false);
    watchForms();
});
function pageItemOnclick(zipCode, i){
    searchMenu(zipCode, i);
}
function menuCardOnclick(id){
    searchMenu_ID(id);
}

//****************** screen switches ********************************** */
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
function showMenuBox(switchOn){
    if(switchOn){
        $('#menu-section').show();
    }else{
        $('#menu-section').hide();
    }
}