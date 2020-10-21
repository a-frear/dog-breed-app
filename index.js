'use strict';

function watchForm() {
    $('.js-dog-form').submit(event => {
        event.preventDefault();       
        getDogImage()
    });
};

function getDogImage() {
    const breed = $('.user-breed').val();
    console.log(breed);
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later!'));
}


function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-img').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`);
    $('#hidden-section').removeClass('hidden');
    if (responseJson.status === 'error') {
        alert('We don\'t have that breed right now!');
        $('#hidden-section').addClass('hidden');
    }
};


$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});