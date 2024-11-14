let editButton = document.querySelector("#edit-button");
let saveButton = document.querySelector(".popup__save-button");
let closeButton = document.querySelector("#close-button");
let formElement = document.querySelector(".popup__form");

let popup = document.querySelector(".popup");

const nameInput = document.querySelector("#name");
const aboutInput = document.querySelector("#about");

const userName = document.querySelector(".profile__info-name");
const userAbout = document.querySelector(".profile__info-ocupation");

function openPopup() {
  initForm();
  popup.classList.add("popup__opened");
}

function closePopup() {
  popup.classList.remove("popup__opened");
}

function initForm() {
  nameInput.value = userName.textContent;
  aboutInput.value = userAbout.textContent;
}

function updateProfile() {
  userName.textContent = nameInput.value;
  userAbout.textContent = aboutInput.value;
}

function cleanInputs() {
  nameInput.value = "";
  aboutInput.value = "";
}

function listenInputs() {
  if (nameInput.value.trim() === "" || aboutInput.value.trim() === "") {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
}

function saveData(evt) {
  evt.preventDefault();
  updateProfile();
  cleanInputs();
  closePopup();
}

// // // Eventos
editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", saveData);
formElement.addEventListener("input", listenInputs);
