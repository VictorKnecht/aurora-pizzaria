const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const filters = document.querySelectorAll(".filter");
const pizzas = document.querySelectorAll(".pizza-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.filter;
    pizzas.forEach((pizza) => {
      const matches = category === "todas" || pizza.dataset.category === category;
      pizza.classList.toggle("hidden", !matches);
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
