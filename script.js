document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link)=> {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission alert
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        form.reset();
    });

    // Adding animations on project hover
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseover", function () {
            project.style.transform = "scale(1.05)";
            project.style.transition = "transform 0.3s ease";
        });
        project.addEventListener("mouseout", function () {
            project.style.transform = "scale(1)";
        });
    });
});

