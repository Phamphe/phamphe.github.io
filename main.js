var typed = new Typed(".occupation", {
  strings: ["UI/UX Designer", "FrontEnd Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.querySelector(".top");

  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

function toggleMenu() {
  const menu = document.querySelector(".navbar-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Add your own logic here for additional form validation if needed

    // Send the form data to Formspree
    fetch("https://formspree.io/phamphemulalo@gmail.com", {
      method: "POST",
      body: new FormData(this),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from Formspree
        if (data.success) {
          // Show a success message
          alert("Email sent successfully!");
        } else {
          // Show an error message
          alert("Failed to send email. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again later.");
      });
  });
