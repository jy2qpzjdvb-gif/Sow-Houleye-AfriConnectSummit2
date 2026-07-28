// menu hamburger 
console.log("le fichier foctionne")

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});

// onglets du programme 

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        tabButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        tabContents.forEach(function (content) {
            content.classList.remove("active");
        });

        button.classList.add("active");

        const day = button.getAttribute("data-day");

        document.getElementById(day).classList.add("active");

    });

});

//filtre des cartes intervenants

const filterButtons = document.querySelectorAll(".filter-btn");
const speakerCards = document.querySelectorAll(".speaker-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        speakerCards.forEach(function (card) {

            if (filter === "all" || card.getAttribute("data-category") === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

// validation formulaire 

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const participation = document.getElementById("participation").value;
        const country = document.getElementById("country").value;
        const sujet = document.getElementById("sujet").value;
        const message = document.getElementById("message").value;

        if (
            nom === "" ||
            email === "" ||
            phone === "" ||
            participation === "" ||
            country === "" ||
            sujet === "Choisissez un sujet" ||
            message === ""
        ) {

            alert("Veuillez remplir tous les champs.");
            return;
        }

        alert("Inscription envoyée avec succès !");
        contactForm.reset();

    });

}

// chiffre clè

function compteur(id, valeurFinale) {

    const element = document.getElementById(id);

    if (element == null) {
        return;
    }

    let nombre = 0;

    const interval = setInterval(function () {

        nombre++;

        element.textContent = nombre;

        if (nombre >= valeurFinale) {

            clearInterval(interval);

        }

    }, 20);

}

compteur("participants", 1200);
compteur("speakers", 48);
compteur("days", 3);
compteur("countries", 12);

// bouton retour en haut

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

}
backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// annee dynamique

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Mode sombre

const themeToggle = document.getElementById("theme-toggle");

// Appliquer le thème enregistré
if (localStorage.getItem("theme") === "dark") {

    document.body.setAttribute("data-theme", "dark");

    if (themeToggle) {
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }

}

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        if (document.body.getAttribute("data-theme") === "dark") {

            document.body.removeAttribute("data-theme");

            localStorage.setItem("theme", "light");

            themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';

        } else {

            document.body.setAttribute("data-theme", "dark");

            localStorage.setItem("theme", "dark");

            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';

        }

    });

}