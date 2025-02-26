tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
}


document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Feather icons
    feather.replace();

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    darkModeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll reveal animation
    window.addEventListener('scroll', revealOnScroll);
});

function revealOnScroll() {
    var reveals = document.querySelectorAll(".custom-transition");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("opacity-100");
            reveals[i].classList.remove("opacity-0");
        } else {
            reveals[i].classList.add("opacity-0");
            reveals[i].classList.remove("opacity-100");
        }
    }
}