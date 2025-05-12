import logo from "/logo.svg";
import LenisScroll from "../class/Lenis";

let now = new Date().getFullYear();
const menu = document.querySelector('.menu');

class MobileMenu {
    constructor() {
        window.addEventListener("DOMContentLoaded", () => {
            this.init();
        });
    }

    init() {
        this.events();
    }

    events() {
        let menuOpenElem = document.querySelector('[data-menu-open]'),
            menuCloseElem = document.querySelector('[data-menu-close]');

        menuOpenElem.addEventListener("click", () => {
            this.open();
        });


        menuCloseElem.addEventListener("click", () => {
            this.close();
        });
    }

    open() {
        LenisScroll.lenis.stop();
        menu.classList.add("menu-show");
        document.querySelector('body').classList.add("menu-open");
    }

    close() {
        LenisScroll.lenis.start();
        menu.classList.remove("menu-show");
        document.querySelector('body').classList.remove("menu-open");
    }
}

new MobileMenu();