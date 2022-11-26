const body = document.querySelector("body");
const header = document.getElementById("myHeader");
const sticky = header.offsetTop;
const loginBtn = document.querySelector(".log-in-button");
const modalLoginWrapper = document.querySelector(".modal_login_wrapper");
const modalInputWrapper = document.querySelector(".modal_input_wrapper");
const closeBtn = document.querySelector(".modal_close");
const descriptionBtns = document.querySelectorAll(".description-button");
const descriptionElements = document.querySelectorAll(".description");
const formBtn = document.querySelector(".form-main-button");
const modalFormWrapper = document.querySelector(".modal_form_wrapper");
const modalFormWindow = document.querySelector(".modal_form_window");

// Description Blocks Switch

descriptionBtns.forEach((btn) => {
  btn.addEventListener("click", descriptionCardsSwitch);
});

function descriptionCardsSwitch(e) {
  document.querySelectorAll(".description").forEach((description) => {
    if (description.classList.contains("js_description_active")) {
      description.classList.remove("js_description_active");
      description
        .querySelector(".description-button")
        .classList.remove("js_description_button");
      description
        .querySelector(".description-text")
        .classList.remove("js_description_text");
    }
  });

  e.target.parentElement.classList.add("js_description_active");
  e.target.classList.add("js_description_button");
  e.target.parentElement
    .querySelector(".description-text")
    .classList.add("js_description_text");
}

// Sticky Header
window.onscroll = function () {
  makeStickyHeader();
};

function makeStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Login Modal Window

loginBtn.addEventListener("click", modalInputOpen);
closeBtn.addEventListener("click", modalClose);

function modalInputOpen() {
  modalLoginWrapper.style.display = "flex";
  modalInputWrapper.style.display = "flex";
  body.style.overflow = "hidden";
}

function modalClose() {
  body.style.overflow = "initial";
  modalLoginWrapper.style.display = "none";
}

// Form Modal Window

function formWindowOpen() {
  modalFormWrapper.style.display = "flex";
  modalFormWindow.style.display = "flex";
  body.style.overflow = "hidden";
}

// Anchor function

document.querySelectorAll(".anchor_wrapper button").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // this.getAttribute("data-href")
    document.querySelector(`section${e.target.dataset.href}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Close modal windows by click anywhere on Body

window.onclick = function (event) {
  if (event.target == modalLoginWrapper || event.target == modalFormWrapper) {
    modalLoginWrapper.style.display = "none";
    modalFormWrapper.style.display = "none";
    body.style.overflow = "initial";
  }
};

// Dynamic anchors
