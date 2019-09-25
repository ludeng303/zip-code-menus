'use strict';
//****************** click listeners and HTML writters */

//****************** click listeners ******************************** */
function watchForms() {
    $('#js-form-zip').submit(event => {
        event.preventDefault();
        const userInput = $('#js-input-zip').val();
        searchZipCode(userInput);
    });
}

$(function() {
    watchForms();
});



//****************** HTML writters ******************************** */