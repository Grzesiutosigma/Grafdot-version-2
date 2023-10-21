const navBar = document.querySelector(".navbar");
let prevScrollPos = window.scrollY;

window.addEventListener("scrol", function ()  {
    let currScrollPos = window.scrollY

    if (currScrollPos > prevScrollPos) {
        navBar.style.transform = 'tarnslateY(-105%)';
    } else {
        navBar.style.transform = 'tarnslateY(0%)';
    }
});

// Add a class to the menu when the user scrolls down
window.addEventListener("scroll", () => {
    const menu = document.getElementById("sticky-menu");
    if (window.scrollY > 100) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
});

const selectButtons = document.querySelectorAll(".select-button");

selectButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedPlan = button.getAttribute("data-plan");
        alert(`Selected plan: ${selectedPlan}`);
    });
});

let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function autoSlides() {
    showSlides(slideIndex++);
}

showSlides(slideIndex);
setInterval(autoSlides, 8000); // Automatyczne przewijanie co 2 sekundy


