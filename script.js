// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Tooltip for Interactive Map
const tooltip = document.getElementById('tooltip');
const mapOverlay = document.querySelector('.map-overlay');

mapOverlay.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  tooltip.style.left = `${offsetX + 10}px`;
  tooltip.style.top = `${offsetY + 10}px`;
  tooltip.style.opacity = 1;

  // Simulated country hover data
  const countryNames = ['USA', 'Canada', 'France', 'Japan', 'Australia'];
  tooltip.textContent = `Visit ${countryNames[Math.floor(Math.random() * countryNames.length)]}`;
});

mapOverlay.addEventListener('mouseleave', () => {
  tooltip.style.opacity = 0;
});

// Change content dynamically (e.g., country name, description)
const countryName = "Japan";
document.getElementById("country-name").textContent = countryName;
document.getElementById("country-name-small").textContent = countryName;

// Booking form submission
document.querySelector('.booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Your trip has been booked successfully!");
});

// Trip Planner Logic
let selectedDestination = "";
const destinationCards = document.querySelectorAll(".destination-card");
const selectedDestinationEl = document.getElementById("selected-destination");
const activityForm = document.getElementById("activity-form");
const activityList = document.querySelector(".activity-list");
const reviewActivitiesEl = document.getElementById("review-activities");
const savePlanButton = document.getElementById("save-plan");

// Step 1: Select Destination
destinationCards.forEach(card => {
  card.addEventListener("click", () => {
    selectedDestination = card.getAttribute("data-destination");
    selectedDestinationEl.textContent = selectedDestination;
    alert(`Destination set to ${selectedDestination}!`);
  });
});

// Step 2: Add Activities
activityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const activity = document.getElementById("activity").value;
  const date = document.getElementById("date").value;

  if (activity && date) {
    const listItem = document.createElement("li");
    listItem.textContent = `${activity} on ${date}`;
    activityList.appendChild(listItem);

    // Update review section
    const reviewItem = listItem.cloneNode(true);
    reviewActivitiesEl.appendChild(reviewItem);

    activityForm.reset();
  }
});

// Step 3: Save Trip Plan
savePlanButton.addEventListener("click", () => {
  alert(`Your trip to ${selectedDestination} has been saved!`);
});

// Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const blogCards = document.querySelectorAll(".blog-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    blogCards.forEach((card) => observer.observe(card));
  });
  
  // Fade-in animation
  const style = document.createElement("style");
  style.innerHTML = `
    .fade-in {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .blog-card {
      opacity: 0;
      transform: translateY(20px);
    }
  `;
  document.head.appendChild(style);

  // Animate About Content on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const aboutContent = document.querySelector(".about-content");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutContent.style.opacity = "1";
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(aboutContent);
  });

  // Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      alert("Your message has been sent successfully!");
      contactForm.reset();
    });
  });

  // Newsletter Subscription Handling
document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById("newsletterForm");
  
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.getElementById("newsletterEmail").value.trim();
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      alert("Thank you for subscribing to our newsletter!");
      newsletterForm.reset();
    });
  });
  