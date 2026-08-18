/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


/* =========================
   SEARCH CARS
========================= */

function searchCars() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cars = document.querySelectorAll(".car-card");

    cars.forEach(function(car) {

        const carName = car
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (carName.includes(input)) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }

    });
}


/* =========================
   CAR DETAILS MODAL
========================= */

function showDetails(carName) {

    const modal = document.getElementById("carModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");

    title.textContent = carName;

    if (carName === "BMW M3") {

        description.textContent =
            "The BMW M3 combines everyday practicality with incredible M performance. It delivers powerful acceleration, precise handling and premium comfort.";

    } else if (carName === "BMW M4") {

        description.textContent =
            "The BMW M4 is a high-performance coupe designed for drivers who want aggressive styling, powerful performance and advanced technology.";

    } else if (carName === "BMW M5") {

        description.textContent =
            "The BMW M5 delivers luxury sedan comfort with extraordinary M performance and impressive power.";

    } else if (carName === "BMW M8") {

        description.textContent =
            "The BMW M8 combines luxury, technology and extreme performance in a stunning grand touring package.";

    }

    modal.style.display = "flex";
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

    document.getElementById("carModal").style.display = "none";

}


/* Close modal when clicking outside */

window.onclick = function(event) {

    const modal = document.getElementById("carModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};


/* =========================
   BUY CAR
========================= */

function buyCar() {

    alert(
        "Thank you for your interest!\n\n" +
        "Our BMW Motors team will contact you soon."
    );

}


/* =========================
   CONTACT FORM
========================= */

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "!\n\nYour message has been sent successfully."
        );

        this.reset();

    });


/* =========================
   LOGIN FORM
========================= */

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        alert(
            "Login successful!\n\n" +
            "Welcome back, " + email
        );

    });