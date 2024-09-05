class Gradient {
    constructor() {
        window.addEventListener("DOMContentLoaded", () => {
            this.events();
        });
    }

    events() {
        let gradient = document.createElement("div"),
            main = document.querySelector("main");

        gradient.classList.add('gradient-bg');

        gradient.innerHTML =
            `
                <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                </svg>
                <div class="gradients-container">
                    <div class="g1"></div>
                    <div class="g2"></div>
                    <div class="g3"></div>
                    <div class="g4"></div>
                    <div class="g5"></div>
                    <div class="interactive"></div>
                </div>
            `;

        // add class for <header>
        gradient.classList.add("header");

        // prepend header of main
        main.parentElement.prepend(gradient);
    }
}

new Gradient();