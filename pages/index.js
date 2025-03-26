import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";


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



// Instancia de UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-ocupation"
});




 // Instancia de PopupWithForm 
 const popupForm = new PopupWithForm(".popup", (formData) => {
  if (popupForm.getTitle() === "Editar Perfil") {
    profileName.textContent = formData.first;
    profileAbout.textContent = formData.second;

} else if (popupForm.getTitle() === "Nuevo Lugar") {
    const newCard = new Card(formData.first, formData.second);
    cardsContainer.prepend(newCard.getHtmlCard()); 

}
});

popupForm.setEventListeners();



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

// Instancia de PopupWithImage
const popupImage = new PopupWithImage(".bigimage");
popupImage.setEventListeners();


// Instancia de Section para manejar la galería de tarjetas
const cardSection = new Section(
  { items: items, renderer: (item) => {
      const card = new Card(item.name, item.link, popupImage);
      cardSection.addItem(card.generateCard());
  }},
  ".cards__container"
);
cardSection.renderItems();



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


 

  










