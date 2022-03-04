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