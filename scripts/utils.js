const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-ocupation");
const profileButton = document.querySelector(".profile__add-button");

const popup = document.querySelector(".popup");
const closePopUpButton = document.querySelector(".popup-close");
const firstInput = document.querySelector(".popup__form-first");
const secondInput = document.querySelector(".popup__form-second");
const formElement = document.querySelector(".popup__form");
const popupFormTitle = document.querySelector(".popup__form-title");
const popupFormButton = document.querySelector(".popup__button");

const bigImage = document.querySelector(".bigimage");
const bigImageIlustration = document.querySelector(".bigimage-ils");
const bigImageRef = document.querySelector(".bigimage-title");
const closeBigImage = document.querySelector(".bigimage-close");


function openEditAddPopup(evt) {
    const className = evt.currentTarget.className;

    switch (className) {
        case "profile__edit-button":
            popupFormTitle.textContent = "Editar perfil";
            popupFormButton.textContent = "Guardar";
            firstInput.placeholder = "Nombre";
            firstInput.type = "text";
            secondInput.placeholder = "Ocupación";
            secondInput.type = "text";
            firstInput.value = "";
            secondInput.value = "";
            break;
        case "profile__add-button":
            popupFormTitle.textContent = "Nuevo lugar";
            popupFormButton.textContent = "Agregar";
            firstInput.placeholder = "Lugar";
            firstInput.type = "text";
            secondInput.placeholder = "Enlace a la imagen";
            secondInput.type = "URL";
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
            buttonText.type = "submit";
            break;
        case "Agregar":
            const card = {
                name: firstInput.value,
                link: secondInput.value,
            }
            let cardElme = getHtmlCard(card);
            cardsContainer.append(card.getHtmlCard());
            break;
    }
    popup.classList.remove("popup__opened");

}

// Cerrar popup dando click en el boton de cerrar
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

// Cerrar popup presionando ESC
document.addEventListener("keydown", function (evt) {
    if (
        evt.key === "Escape" &&
        popup.classList.contains("popup__opened")
    ) {
        popup.classList.remove("popup__opened")
    } else if (
        evt.key === "Escape" &&
        bigImage.classList.contains("bigimage__opened")
    ) {
        bigImage.classList.remove("bigimage__opened");
    }
});


// Cerrar popup haciendo click en la superposición

const setPopupEventListeners = (settings) => {
    const popupList = Array.from(document.querySelectorAll(settings.popupSelector));
    const bigImageList = Array.from(document.querySelectorAll(settings.bigImageSelector)
    );

    popupList.forEach((popupElement) => {
        popupElement.addEventListener("click", function (evt) {
            if (evt.target.matches(settings.popupOpenedClass)) {
                popup.classList.remove("popup__opened")

            }
        });
    });
    bigImageList.forEach((bigImageElement) => {
        bigImageElement.addEventListener("click", function (evt) {
            if (evt.target.matches(settings.bigImageOpenedClass)) {
                bigImage.classList.remove("bigimage__opened");
            }
        });
    });
}

setPopupEventListeners({
    popupSelector: ".popup",
    bigImageSelector: ".bigimage",
    popupOpenedClass: ".popup__opened",
    bigImageOpenedClass: ".bigimage__opened",
});


editButton.addEventListener("click", openEditAddPopup);
profileButton.addEventListener("click", openEditAddPopup);
formElement.addEventListener("submit", formSubmit);
closePopUpButton.addEventListener("click", formBigImageClose);
closeBigImage.addEventListener("click", formBigImageClose);