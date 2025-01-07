const page = document.querySelector(".page");

const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-ocupation");

const cardsContainer = document.querySelector(".cards__container");
const cardTemplate = document.querySelector("#card-template").content;
const profileButton = document.querySelector(".profile__add-button");

const popup = document.querySelector(".popup");
const closePopUpButton = document.querySelector(".popup-close");
const firstInput = document.querySelector(".popup__form-first");
const secondInput = document.querySelector(".popup__form-second");
const formElement = document.querySelector(".popup__form");
const popupFormTitle = document.querySelector(".popup__form-title");
const popupFormButton = document.querySelector(".popup__form-button");

const bigImage = document.querySelector(".bigimage");
const bigImageIlustration = document.querySelector(".bigimage-ils");
const bigImageTitle = document.querySelector(".bigimage-title");
const closeBigImage = document.querySelector(".bigimage-close");


const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  },
];

// create cards

initialCards.forEach((card) => {
  let cardTemplate = createCard(card);
  cardsContainer.prepend(cardTemplate);
}
);

function toggleOpenBigImage(evt) {
  bigImage.classList.toggle("bigimage__opened");
  bigImageIlustration.src = evt.target.src;
  bigImageTitle.innerText = evt.target.name;
}


function createCard(card) {
  let cardElm = cardTemplate.querySelector(".cards__item").cloneNode(true);
  cardElm.querySelector(".cards__item-img").src = card.link;
  cardElm.querySelector(".cards__item-name").textContent = card.name;

  deleteItemTrashButton(cardElm);
  toggleItemHeartButton(cardElm);

  const image = cardElm.querySelector(".cards__item-img");
  const name = cardElm.querySelector(".cards__item-name");
  image.addEventListener("click", toggleOpenBigImage);  
  name.addEventListener("click", toggleOpenBigImage);
 

  return cardElm;
}

function deleteItemTrashButton(card) {
  let deleteButton = card.querySelector(".cards__item-delete");
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
}

function toggleItemHeartButton(card) {
  let heartButton = card.querySelector(".cards__item-like");
  heartButton.addEventListener("click", function () {
    heartButton.classList.toggle("cards__item-like_active");
  });
}

function openEditAddPopup(evt) {
  const className = evt.currentTarget.className;

  switch (className) {
    case "profile__edit-button":
      popupFormTitle.textContent = "Editar perfil";
      popupFormButton.textContent = "Guardar";
      firstInput.placeholder = "Nombre";
      secondInput.placeholder = "Ocupación";
      firstInput.value = profileName.textContent;
      secondInput.value = profileAbout.textContent;
      break;
    case "profile__add-button":
      popupFormTitle.textContent = "Nuevo lugar";
      popupFormButton.textContent = "Agregar";
      firstInput.placeholder = "Lugar";
      secondInput.placeholder = "Enlace a la imagen";
      break;
  }

  popup.classList.add("popup__opened");
}

function formSubmit(evt) {
  evt.preventDefault()
  const buttonText = evt.target[2].innerText;

  switch (buttonText) {
    case "Guardar":
      profileName.textContent = firstInput.value;
      profileAbout.textContent = secondInput.value;
      firstInput.value = "";
      secondInput.value = "";
      break;
    case "Agregar":
      const card = {
        name: firstInput.value,
        link: secondInput.value,
      }
      let cardElme = createCard(card);
      cardsContainer.prepend(cardElme);
      break;
  }
  popup.classList.remove("popup__opened");

}

function formBigImageClose(evt) {
  const className = evt.currentTarget.className;

  switch (className) {
    case "popup-close":
      
      break;
    case "bigimage-close":
      
      break;
  }
  
  popup.classList.remove("popup__opened");
  bigImage.classList.remove("bigimage__opened");
}



editButton.addEventListener("click", openEditAddPopup);
profileButton.addEventListener("click", openEditAddPopup);
formElement.addEventListener("submit", formSubmit);
closePopUpButton.addEventListener("click", formBigImageClose);
closeBigImage.addEventListener("click", formBigImageClose);




