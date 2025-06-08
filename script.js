window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//dp section

const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "profile-details.html";
});

//movie card

const movieCard = document.querySelectorAll(".content-card");

movieCard.forEach((card) => {
  card.addEventListener("mouseEnter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseLeave", () => {
    card.style.transform = "scale(1.05)";
  });
});
