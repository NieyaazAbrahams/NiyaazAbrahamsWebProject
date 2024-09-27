console.log("JavaScript file loaded");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");

    const contactOpenBtns = document.querySelectorAll('.contactbtn');
    console.log(contactOpenBtns);  // Check if buttons are selected

    const contactCloseBtn = document.querySelector('.closebtn');
    console.log(contactCloseBtn);  // Check if close button is selected

    const contactContainer = document.querySelector('.container');
    console.log(contactContainer);  // Check if modal container is selected

    contactOpenBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Contact button clicked');  // Check if click event is triggered
            contactContainer.classList.add('visible');
        });
    });

    contactCloseBtn.addEventListener('click', () => {
        console.log('Close button clicked');  // Check if close button event is triggered
        contactContainer.classList.remove('visible');
    });
});

//navbar when the screen is smaller.
console.log("JavaScript file loaded");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");

    // Select the toggle button
    const contactToggleBtn = document.querySelector('.hamburger');
    console.log(contactToggleBtn);  // Check if button is selected

    // Select the contact container
    const contactContainer = document.querySelector('.sidebar');
    console.log(contactContainer);  // Check if modal container is selected

    // Add click event listener to toggle button
    contactToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Toggle button clicked');  // Check if click event is triggered

        // Toggle the visibility of the contact container
        if (contactContainer.classList.contains('visible')) {
            contactContainer.classList.remove('visible');
            console.log('Contact modal closed');
        } else {
            contactContainer.classList.add('visible');
            console.log('Contact modal opened');
        }
    });
});

