import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Popup } from "./utils.js";
import { PopupForm } from "./utils.js";


const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-ocupation");
const cardsContainer = document.querySelector(".cards__container");

const items = [
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



// Instancia para crear carta

items.forEach(function (item) {
  const card = new Card(item.name, item.link);
  cardsContainer.append(card.getHtmlCard());
})

function addCardToPage(title, imageUrl) {
  const newCard = new Card(title, imageUrl);
  cardsContainer.appendChild(newCard.getHtmlCard());
}


  // Instancia de PopupForm 
  const popupForm = new PopupForm(".popup", (formData) => {
    if (popupForm.getTitle() === "Editar Perfil") {
      profileName.textContent = formData.first;
      profileAbout.textContent = formData.second;

  } else if (popupForm.getTitle() === "Nuevo Lugar") {
      const newCard = new Card(formData.first, formData.second);
      cardsContainer.prepend(newCard.getHtmlCard()); 
 
  }
});

  popupForm.setEventListeners();

  // Instancia del validador de formularios
  const formValidator = new FormValidator(".popup__form", {
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "popup__input-error"
  });
  formValidator.enableValidation();

  // Configuración de cada formulario
  const editProfileConfig = {
      title: "Editar Perfil",
      placeholders: ["Nombre", "Ocupación"],
      inputNames: ["first", "second"],
      buttonText: "Guardar"

  };

  const addCardConfig = {
      title: "Nuevo Lugar",
      placeholders: ["Lugar", "Enlace a la imagen"],
      inputNames: ["first", "second"],
      buttonText: "Agregar"
  };

  // Función para inicializar el validador de formularios
  function initValidation() {
    if (formValidator) {
        formValidator.enableValidation();
    } else {
        formValidator = new FormValidator(".popup__form", {
            inputSelector: ".popup__input",
            submitButtonSelector: ".popup__button",
            inactiveButtonClass: "popup__button_disabled",
            inputErrorClass: "popup__input-error"
        });
        formValidator.enableValidation();
    }
}

  // Abrir los popup 
  document.querySelector("#edit-button").addEventListener("click", () => {
      popupForm.setFormConfig(editProfileConfig);
      popupForm.open();
      initValidation();
  });

  document.querySelector(".profile__add-button").addEventListener("click", () => {
      popupForm.setFormConfig(addCardConfig);
      popupForm.open();
      initValidation(); 
  });

  










