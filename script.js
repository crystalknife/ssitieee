// Set your target event date for the countdown
const targetDate = new Date("January 3, 2025 09:00:00").getTime();

// Countdown Timer Function
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.getElementById("countdown").innerHTML = "<h2>Event Started!</h2>";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Redirect to Google Form for registration
document.querySelector(".register-btn2").addEventListener("click", () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSd6_6u6M2m55L-iod5l5tHBqRPFzLB3jMhUJIgedqLTCKjAeQ/viewform?usp=sf_link", "_blank"); // Replace with your actual Google Form URL
});

// Redirect to college location on Google Maps
document.querySelector(".locate-btn").addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/yQ9T7DMgSAJWSCCGA", "_blank");
});

// Phone numbers for coordinators
const coordinators = [
    { name: "Rohitha K", phone: "+91-9686708879" },
    { name: "Balasubrahmanya A G", phone: "+91-8095838211" },
    { name: "Prajwal", phone: "+91-9741257297" }
];

// Add event listener for "Click Me" button
document.querySelector(".click-btn").addEventListener("click", () => {
    // Create a formatted message with the coordinator details
    const message = coordinators
        .map(coord => `${coord.name}: ${coord.phone}`)
        .join("\n");

    // Display the message in an alert popup
    alert("Contact Coordinators:\n" + message);
});

document.addEventListener("DOMContentLoaded", () => {
    const rulesSection = document.querySelector(".rules");
    const sparkleContainer = document.createElement("div");
    sparkleContainer.classList.add("sparkles");
  
    // Generate 50 sparkles
    for (let i = 0; i < 50; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      
      // Random positions and delays
      sparkle.style.top = Math.random() * 100 + "%";
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.animationDelay = Math.random() * 3 + "s";
      sparkle.style.animationDuration = Math.random() * 3 + 2 + "s";
  
      sparkleContainer.appendChild(sparkle);
    }
  
    rulesSection.appendChild(sparkleContainer);
  });
  
