import { Popup } from "./Popup.js";


export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popup.querySelector(".bigimage-ils");
        this._titleElement = this._popup.querySelector(".bigimage-title");
        this._closeButton = this._popup.querySelector(".bigimage-close");

    }

    open(imageSrc, title) {
        this._imageElement.src = imageSrc;
        this._imageElement.alt = title;
        this._titleElement.textContent = title;
        this._popup.classList.add("popup__opened");
         super.open();
       
    }

    close() {
        this._popup.classList.remove("popup__opened");
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._closeButton.addEventListener("click", () => this.close());
    }
}














// function openImageModal(imageSrc, imageTitle) {
//     const bigImageModal = document.querySelector("#bigimage");
//     const bigImage = bigImageModal.querySelector(".bigimage-ils");
//     const bigImageTitle = bigImageModal.querySelector(".bigimage-title");

//     bigImage.src = imageSrc;  
//     bigImage.alt = imageTitle;  
//     bigImageTitle.textContent = imageTitle; 

//     bigImageModal.classList.add("popup__opened");
// }

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll(".cards__item-img").forEach(image => {
//         image.addEventListener("click", () => {
//             const imageSrc = image.src;
//             const imageTitle = image.closest(".cards__item").querySelector(".cards__item-name").textContent;
//             openImageModal(imageSrc, imageTitle);
//         });
//     });
// });

// document.querySelector(".bigimage-close").addEventListener("click", () => {
//     document.querySelector("#bigimage").classList.remove("popup__opened");
// });

// document.querySelector("#bigimage").addEventListener("click", (event) => {
//     if (event.target === event.currentTarget) {
//         event.currentTarget.classList.remove("popup__opened");
//     }
// });

