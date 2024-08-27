const buttons = document.querySelectorAll(".filter-btn");
const feedbackDiv = document.getElementById("feedback-section");
const contactDiv = document.getElementById("contact-section");
const footer = document.getElementById("date");

const date = new Date();
const year = date.getFullYear();
footer.innerText += year;
feedbackDiv.style.display = "none";

function filter() {
  buttons.forEach((button) => {
    button.classList.remove("clicked");
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    const btnCondition = button.getAttribute("data-filter");

    document.querySelectorAll(".card").forEach((card) => {
      const cardCondition = card.getAttribute("data-category");
      if (btnCondition === "all" || btnCondition === cardCondition) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

function sendMessage() {
  contactDiv.style.display = "none";

  feedbackDiv.style.display = "block";
}

function sendMessageAgain() {
  contactDiv.style.display = "block";
  feedbackDiv.style.display = "none";
}

