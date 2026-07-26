const nameInput = document.querySelector(".nameInput");
const nameForm = document.querySelector(".nameForm");
const greetingText = document.querySelector(".greeting-text");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onNameSubmit(event) {
    event.preventDefault();
    const username = nameInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    nameForm.classList.add(HIDDEN_CLASSNAME);
    location.reload();
}

function displayGreeting() {
    const savedName = localStorage.getItem(USERNAME_KEY);

    if (!savedName) {
        greetingText.innerText = "Please enter your name.";
        return;
    }

    const hours = new Date().getHours();
    if (hours >= 6 && hours < 12) {
        greetingText.innerText = `Good morning, ${savedName}!`;
    } else if (hours >= 12 && hours < 18) {
        greetingText.innerText = `Good afternoon, ${savedName}!`;
    } else if (hours >= 18 && hours < 23) {
        greetingText.innerText = `Good evening, ${savedName}!`;
    } else {
        greetingText.innerText = `You are a night owl, ${savedName}!`;
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

nameForm.classList.toggle(HIDDEN_CLASSNAME, savedUsername !== null);

if (savedUsername === null) {
    nameForm.addEventListener("submit", onNameSubmit);
}

displayGreeting();