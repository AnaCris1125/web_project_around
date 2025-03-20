
export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector(".popup-close");
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add("popup__opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup__opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener("click", () => this.close());
        this._popup.addEventListener("mousedown", (event) => {
            if (event.target === this._popup) {
                this.close();
            }
        });
    }


}

export class PopupForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._form.querySelectorAll(".popup__input");
        this._formTitle = this._popup.querySelector(".popup__form-title");
        this._submitButton = this._popup.querySelector(".popup__button");
    }

    _getInputValues() {
        const formData = {};
        this._inputList.forEach((input) => {
            formData[input.name] = input.value;
        });
        return formData;
    }

    getTitle() {
        return this._formTitle ? this._formTitle.textContent : "";
    }

    setFormConfig({ title, placeholders, inputNames, buttonText }) {
        if (this._formTitle) {
            this._formTitle.textContent = title;
        }
        this._submitButton.textContent = buttonText;

        this._inputList.forEach((input, index) => {
            input.placeholder = placeholders[index];
            input.name = inputNames[index];
            if (title === "Nuevo Lugar" && index === 1) {
                input.type = "url";
            } else {
                input.type = "text";
            }
        });
    }

  

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = this._getInputValues();
            this._handleFormSubmit(formData);
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}


function openImageModal(imageSrc, imageTitle) {
    const bigImageModal = document.querySelector("#bigimage");
    const bigImage = bigImageModal.querySelector(".bigimage-ils");
    const bigImageTitle = bigImageModal.querySelector(".bigimage-title");

    bigImage.src = imageSrc;  
    bigImage.alt = imageTitle;  
    bigImageTitle.textContent = imageTitle; 

    bigImageModal.classList.add("popup__opened");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cards__item-img").forEach(image => {
        image.addEventListener("click", () => {
            const imageSrc = image.src;
            const imageTitle = image.closest(".cards__item").querySelector(".cards__item-name").textContent;
            openImageModal(imageSrc, imageTitle);
        });
    });
});

document.querySelector(".bigimage-close").addEventListener("click", () => {
    document.querySelector("#bigimage").classList.remove("popup__opened");
});

document.querySelector("#bigimage").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
        event.currentTarget.classList.remove("popup__opened");
    }
});

