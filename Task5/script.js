// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Initialize AOS with repeat animation on scroll up/down
AOS.init({
  duration: 1000,
  once: false
});


 function showSuccessMessage() {
    alert("Your message has been sent successfully.");
    // Form submit nahi karna (tab tak jab tak backend handle na ho)
    return false; 
  }



