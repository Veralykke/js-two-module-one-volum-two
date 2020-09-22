export function displayMessage(messageType, message, target) {
    const element = document.querySelector(target);

    element.innerHTML = `<div class = "results${messageType}">${message}</div>`;
}

export function errorMessage(error){
    const element = document.querySelector(".results");
    element.innerHTML = `<div class="errorMessage">${error}</div>`;
}