const cardTemplate = document.querySelector("#card-template").content;


export default class Card {
    constructor(title, image) {
        this._title = title;
        this._image = image;
    }
    cloneTemplate() {
        return cardTemplate.querySelector(".cards__item").cloneNode(true);
    }

    setProperties() {
        this.cardImage = this.card.querySelector(".cards__item-img");
        this.cardImage.src = this._image;
        this.cardTitle = this.card.querySelector(".cards__item-name");
        this.cardTitle.textContent = this._title;

    }

    generateCard() {
        this.card = this.cloneTemplate();
        this.setProperties();
        this.setEventListeners();
        return this.card;
    }

    setEventListeners() {
        this.deleteButton = this.card.querySelector(".cards__item-delete");
        this.deleteButton.addEventListener("click", () => {
            this.card.remove();
        });
        this.likeButton = this.card.querySelector(".cards__item-like");
        this.likeButton.addEventListener("click", () => {
            this.likeButton.classList.toggle("cards__item-like_active");
        })
    }
        
    
    getHtmlCard(){
        return this.generateCard();
    }
}

