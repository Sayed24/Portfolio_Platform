const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.textContent = "Sending message...";
  status.style.color = "#2563eb";

  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
    form.reset();
  }, 1000);
});
