'use strict';
//****************** data storage & click listeners */

//****************** click listeners ******************************** */
function watchForms() {
    $('#js-form-zip').submit(event => {
        event.preventDefault();
        const userInput = $('#js-input-zip').val();
        //searchZipCode(userInput);
        searchMenu(userInput);
    });
}

$(function() {
    watchForms();
});



//****************** HTML writters ******************************** */