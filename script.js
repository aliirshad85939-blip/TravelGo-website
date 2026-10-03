// SEARCH DESTINATION

function searchDestination() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".destination");

    cards.forEach(card => {

        let name = card
            .getAttribute("data-name")
            .toLowerCase();

        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// FILTER DESTINATION

function filterDestination() {

    let category =
        document.getElementById("categoryFilter").value;

    let cards =
        document.querySelectorAll(".destination");

    cards.forEach(card => {

        let cardCategory =
            card.getAttribute("data-category");

        if (category === "all" ||
            category === cardCategory) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// DESTINATION BOOKING

function bookDestination(destination) {

    alert(
        "You selected " +
        destination +
        ". Please complete the booking form."
    );

    document
        .getElementById("booking")
        .scrollIntoView();
}


// PACKAGE BOOKING

function bookPackage(packageName) {

    alert(
        packageName +
        " selected successfully!"
    );

    document
        .getElementById("booking")
        .scrollIntoView();
}


// HOTEL

function hotelBooking() {

    alert(
        "Hotel booking feature selected!"
    );

}


// FLIGHT

function flightBooking() {

    alert(
        "Flight booking feature selected!"
    );

}


// ITINERARY

function createItinerary() {

    alert(
        "Travel itinerary creator opened!"
    );

}


// BOOKING FORM

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "🎉 Booking request submitted successfully!"
        );

        this.reset();

    });


// CONTACT FORM

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "✅ Your message has been sent!"
        );

        this.reset();

    });


// LOGIN MODAL

function openLogin() {

    document
        .getElementById("loginModal")
        .style.display = "flex";

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .style.display = "none";

}


// REGISTER MODAL

function openRegister() {

    document
        .getElementById("registerModal")
        .style.display = "flex";

}


function closeRegister() {

    document
        .getElementById("registerModal")
        .style.display = "none";

}


// SWITCH LOGIN TO REGISTER

function switchToRegister() {

    closeLogin();
    openRegister();

}


// LOGIN

function login() {

    alert(
        "Login successful! (Demo)"
    );

    closeLogin();

}


// REGISTER

function register() {

    alert(
        "Account created successfully! (Demo)"
    );

    closeRegister();

}


// CLOSE MODAL WHEN CLICKING OUTSIDE

window.onclick = function(event) {

    let loginModal =
        document.getElementById("loginModal");

    let registerModal =
        document.getElementById("registerModal");

    if (event.target === loginModal) {
        closeLogin();
    }

    if (event.target === registerModal) {
        closeRegister();
    }
    // MOBILE MENU

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// CLOSE MOBILE MENU

function closeMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.remove("active");

}

};