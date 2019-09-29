'use strict';
//****************** screen switches & click listeners */

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
    watchForms();

});

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

//****************** HTML writters ******************************** */