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

form && form.addEventListener("click", toggling);

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
list && list.addEventListener("click", activeItem);

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

if (form) {
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
}

// COUNT DOWN

//1 day = 1000 * 60 * 60 * 24 = 86,400,000 milliseconds
// 86,400,000 milliseconds * 30 = 2,592,000,000

const officialDate = () => {
  const date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toLocaleString(
    "en-us",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
  console.log(date);
  document.querySelectorAll(".official__date").forEach((d) => {
    d.textContent = date;
  });
};

officialDate();

const getStats = (array, time) => {
  array.forEach((a) => {
    a.textContent = time;
  });
};
let time = {
  days: 29,
  hours: 23,
  minutes: 59,
  seconds: 60,
};

let { days, hours, minutes, seconds } = time;

const displayCountDown = () => {
  const getDays = document.querySelectorAll(".days");
  const getHours = document.querySelectorAll(".hours");
  const getMinutes = document.querySelectorAll(".minutes");
  const getSeconds = document.querySelectorAll(".seconds");

  const countDown = setInterval(() => {
    seconds--;
    getStats(getDays, days);
    getStats(getHours, hours);
    getStats(getMinutes, minutes);
    getStats(getSeconds, seconds);

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

  localStorage.setItem("days", days);
  localStorage.setItem("hours", hours);
  localStorage.setItem("minutes", minutes);
  localStorage.setItem("seconds", seconds);
};

displayCountDown();
