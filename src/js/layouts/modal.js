import '../modules/modal';

class Modal {
    constructor() {
        window.addEventListener("DOMContentLoaded", () => {
            this.events();
        });
    }

    events() {
        let modalArea = document.createElement("div"),
            main = document.querySelector("main");

        modalArea.innerHTML =
            ``;

        // add class for modals
        modalArea.classList.add("modal-area");

        // prepend modal of main
        main.parentElement.append(modalArea);
    }
}

new Modal();