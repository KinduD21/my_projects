const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const formMessage = document.getElementById("your-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log( e.target );

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstname.value.trim();
  const lastNameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const formMessageValue = formMessage.value.trim();

  let result = 0;

  if (firstNameValue === "") {
    setErrorFor(firstname, "First name cannot be blank");
  } else {
    setSuccessFor(firstname);
    result += 1;
  }

  if (lastNameValue === "") {
    setErrorFor(lastname, "Last name cannot be blank");
  } else {
    setSuccessFor(lastname);
    result += 1;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
    result += 1;
  }

  if (formMessageValue === "") {
    setErrorFor(formMessage, "Message cannot be blank");
  } else {
    setSuccessFor(formMessage);
    result += 1;
  }

  if (result == 4) {
    formWindowOpen();
    // firstname.value = "";
    // lastname.value = "";
    // email.value = "";
    // formMessage.value = "";
    console.log(`First name: ${firstNameValue}`);
    console.log(`Last name: ${lastNameValue}`);
    console.log(`Email: ${emailValue}`);
    console.log(`Message: ${formMessageValue}`);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function setErrorForTextArea(textarea, message) {
  const formControl = textarea.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessForTextArea(textarea) {
  const formControl = textarea.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
