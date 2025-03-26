const cardTemplate = document.querySelector("#card-template").content;


export default class Card {
    constructor(title, image, popupImage) {
        this._title = title;
        this._image = image;
        this._popupImage = popupImage;
    
    }
    _cloneTemplate() {
        return cardTemplate.querySelector(".cards__item").cloneNode(true);
    }

    _setProperties() {
        this.cardImage = this.card.querySelector(".cards__item-img");
        this.cardImage.src = this._image;
        this.cardTitle = this.card.querySelector(".cards__item-name");
        this.cardTitle.textContent = this._title;
        
    }

    generateCard() {
        this.card = this._cloneTemplate();
        this._setProperties();
        this._setEventListeners();
        return this.card;
    }

    _setEventListeners() {
        this.deleteButton = this.card.querySelector(".cards__item-delete");
        this.deleteButton.addEventListener("click", () => {
            this.card.remove();
        });
        this.likeButton = this.card.querySelector(".cards__item-like");
        this.likeButton.addEventListener("click", () => {
            this.likeButton.classList.toggle("cards__item-like_active");
        })

        this.cardImage.addEventListener("click", () => {
            this._popupImage.open(this._image, this._title);
        });
    
    }
        
    
    getHtmlCard(){
        return this.generateCard();
    }
}

