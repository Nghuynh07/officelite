// PLANS
const select = document.querySelector(".signup__select");
const list = document.querySelector(".signup__list");
const form = document.querySelector(".signup__form");

const toggling = (e) => {
  const arrow = document.querySelector(".arrow");
  if (e.target.closest(".signup__select")) {
    document.querySelector(".signup__list").classList.toggle("toggle__list");
    arrow.style.transition = "transform .3s ease";
    arrow.style.transitionDelay = "25ms";
    arrow.classList.toggle("arrow__rotate");
  }
};

form.addEventListener("click", toggling);

const activeItem = (e) => {
  const items = document.querySelectorAll(".signup__item");
  const currentPlan = e.target;
  const img = e.target.lastElementChild;
  const plan = document.querySelector(".signup__plan");

  items.forEach((item) => {
    item.lastElementChild.style.opacity = "0";
  });

  img.style.opacity = "1";
  img.style.transition = "opacity .1s ease-out";

  plan.textContent = currentPlan.textContent;
};

list.addEventListener("click", activeItem);

// FORM VALIDATIONS
const textValidations = (input) => {
  const img = input.nextElementSibling;
  img.style.transition = "opacity .1s ease-out";
  if (input.value.trim() === "" || input.value.trim().length < 3)
    img.style.opacity = "1";
  else img.style.opacity = "0";
};

const emailValidation = (input) => {
  const img = input.nextElementSibling;
  img.style.transition = "opacity .1s ease-out";

  if (input.value.trim() === "" || !input.value.indexOf("@"))
    img.style.opacity = "1";
  else img.style.opacity = "0";
};

const numberValidation = (input) => {
  const img = input.nextElementSibling;
  img.style.transition = "opacity .1s ease-out";

  if (input.value !== typeof Number) img.style.opacity = "1";
  else img.style.opacity = "0";
};

const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const companyInput = document.querySelector(".company");
const phoneInput = document.querySelector(".phone");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  textValidations(nameInput);
  emailValidation(emailInput);
  textValidations(companyInput);
  // numberValidation(phoneInput);

  nameInput.value = "";
  emailInput.value = "";
  companyInput.value = "";
  phoneInput.value = "";
});

// COUNT DOWN

const displayCountDown = () => {
  let days = 29;
  let hours = 23;
  let minutes = 59;
  let seconds = 60;

  const getDays = document.querySelector(".days");
  const getHours = document.querySelector(".hours");
  const getMinutes = document.querySelector(".minutes");
  const getSeconds = document.querySelector(".seconds");

  const countDown = setInterval(() => {
    seconds--;
    getDays.textContent = days;
    getHours.textContent = hours;
    getMinutes.textContent = minutes;
    getSeconds.textContent = seconds;
    if (seconds === 0) {
      seconds = 60;
      minutes--;
    }

    if (minutes === 0) {
      minutes = 59;
      hours--;
    }

    if (hours === 0) {
      hours = 23;
      days--;
    }
  }, 1000);

  if (days === 0) {
    clearInterval(countDown);
    days = 00;
    hours = 00;
    minutes = 00;
    seconds = 00;
  }
};

displayCountDown();
