export default class FormValidator {
    constructor(formElement, settings) {
        this._formElement = formElement;
        this._settings = settings;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
       
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._settings.inactiveButtonClass);
        } else {
            this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
        }
    };


    _showInputError(input) {
        const errorElement = this._formElement.querySelector(`#${input.name}-error`);
        errorElement.textContent = input.validationMessage;
        input.classList.add(this._settings.inputErrorClass);
       
    };

    _hideInputError(input) {
        const errorElement = this._formElement.querySelector(`#${input.name}-error`);
        errorElement.textContent = input.validationMessage;
        input.classList.remove(this._settings.inputErrorClass);

    };

    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideInputError(input);
        } else {
            this._showInputError(input);
        }
    };

  


    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((input) => {
            input.addEventListener("input", function () {
                this.checkInputValidity(input);
                this._toggleButtonState();
            });
        });
    };

  
    enableValidation() {
        const formList = document.querySelectorAll(this._formSelector);

            formElement.addEventListener("submit", function (evt) {
                evt.preventDefault();
            });
        
        this._setEventListeners();
    }
}



