const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      alert("Message sent successfully! 🚀");
      form.reset();
    } else {
      alert("Something went wrong.");
    }
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}