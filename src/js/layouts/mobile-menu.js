import logo from "/logo.svg";
import LenisScroll from "../class/Lenis";

let now = new Date().getFullYear();
const menu = document.createElement('aside');

class MobileMenu {
    constructor() {
        window.addEventListener("DOMContentLoaded", () => {
            this.init();
        });
    }

    init() {
        let main = document.querySelector("main");

        menu.classList.add("menu");
        main.after(menu);
        this.menuInit();
    }

    menuInit() {
        menu.innerHTML = `
            <div class="menu-wrapper">
                <div class="menu-header">
                    <div class="container">
                        <div class="menu-header-inner">
                            <div class="row justify-content-between">
                                <div class="col-auto cursor-effect">
                                    <div class="menu-header-logo">
                                        <img data-src="` + logo + `" class="lazyload" />
                                        <a href="./" class="stretched-link"></a>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="menu-header-button cursor-effect">
                                        <button type="button" class="btn btn-white btn-sm btn-dimmed btn-colored btn-icon btn-icon-burger position-relative" data-menu-close="">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-navigation">
                    <div class="container">
                        <nav class="nav nav-vertical align-items-center" navigation="menu"></nav>
                    </div>
                </div>
                <div class="menu-copyrite">
                    <div class="container">
                        <span class="fs-4 text-grey-500">
                            © Serj Portfolio ` + now + `
                        </span>
                    </div>
                </div>
            </div>
        `;

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