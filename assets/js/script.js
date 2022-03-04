// JavaScript Document

// wait for the DOM to finish loading before running the quiz
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'start') {
                alert('You clicked Start!');
            } else {
                let buttonType = this.getAttribute('data-type');
                alert(`You clicked ${buttonType}`);
            }
        });
    }
});

// Get the user input element
let user = document.getElementById('user');

// Log user value to the console
console.log('Username:', user.value);

// Get the form and attach an event listener to it
let form = document.getElementById('username-form');
form.addEventListener('submit', function (event) {
    // hide the form once submitted
    this.style['display'] = 'none';
    event.preventDefault();
});