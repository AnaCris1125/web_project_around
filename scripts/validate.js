// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     });
// };

// const toggleButtonState = (inputList, settings, buttonElement) =>    {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add(settings.inactiveButtonClass);
//     } else {
//         buttonElement.classList.remove(settings.inactiveButtonClass);

//     }
// };

// function showInputError(input, settings) {
//     const errorElement = document.querySelector(`#${input.name}-error`);
//     errorElement.textContent = input.validationMessage;
//     input.classList.add(settings.inputErrorClass);
// };

// function hideInputError(input, settings) {
//     const errorElement = document.querySelector(`#${input.name}-error`);
//     errorElement.textContent = input.validationMessage;
//     input.classList.remove(settings.inputErrorClass);

// };

// function checkInputValidity(input, settings) {
//     if (input.validity.valid) {
//         hideInputError(input, settings);

//     } else {
//         showInputError(input, settings);
//     }
// };

// function setEventListeners(formElement, settings) {
//     const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));

// const buttonElement = formElement.querySelector(settings.submitButtonSelector);

// toggleButtonState(inputList, settings, buttonElement);

// inputList.forEach(function (input) {
//     input.addEventListener("input", function () {
//         checkInputValidity(input, settings);
//         toggleButtonState(inputList, settings, buttonElement);
//     });
// });

// };

// function enableValidation(settings) {
//     const formList = document.querySelectorAll(settings.formSelector);

//     formElement.addEventListener("submit", function (evt) {
//         evt.preventDefault();
//     });

//     setEventListeners(formElement, settings);

// };


// enableValidation({
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__button",
//     inactiveButtonClass: "popup__button_disabled",
//     inputErrorClass: "popup__input_type_error",
//     errorClass: "popup__error_visible"
// });





    



