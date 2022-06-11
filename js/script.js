// VARIABLES
const texts = document.querySelectorAll(".text");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".btn");
// OPTIONS
const options = {
  root: null,
  threshold: 0,
};

// ENTRIES ANIMATION FUNCTION

const entryAnimationFunc = (entries, className) => {
  entries.forEach((entry) => {
    entry.target.classList.remove(className);
    if (!entry.isIntersecting) entry.target.classList.add(className);
  });
};
const observing = (array, observer) => {
  array.forEach((object) => {
    observer.observe(object);
  });
};

// CALLBACK FUNCTIONS

const textCallbackFunc = (entries, observer) => {
  entryAnimationFunc(entries, "text__animation");
};

const btnCallbackFunc = (entries, observer) => {
  entryAnimationFunc(entries, "btn__animation");
};

const imgCallbackFunc = (entries, observer) => {
  entryAnimationFunc(entries, "img__blur");
};

// OBSERVERS
const textObserver = new IntersectionObserver(textCallbackFunc, options);
const imgObserver = new IntersectionObserver(imgCallbackFunc, options);
const btnObserver = new IntersectionObserver(btnCallbackFunc, options);

// FUNCTION CALLS
observing(texts, textObserver);
observing(images, imgObserver);
// observing(buttons, btnObserver);
