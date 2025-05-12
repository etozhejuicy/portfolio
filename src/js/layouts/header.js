import routes from "../class/routes";
import logo from "/logo.svg";

class Header {
    constructor() {
        window.addEventListener("DOMContentLoaded", () => {
            this.events();
        });
    }

    events() {
        let pageHasCover = $(document).find('.section-cover'),
            header = document.createElement("header"),
            main = document.querySelector("main");

        header.innerHTML =
            `
            <a href="${routes.urls['index']}" class="header-logo">
                <img data-src="${logo}" class="lazyload" />
            </a>
            <nav class="nav nav-horizontal" navigation="header"></nav>
            <button type="button" class="btn-icon" data-menu-open="">
                <i class="fa-solid fa-bars"></i>
            </button>
    `;

        // add class for <header>
        header.classList.add("header");

        // prepend header of main
        main.parentElement.prepend(header);

        $(window).on('scroll', () => {
            if ($(window).scrollTop() > (pageHasCover.length ? pageHasCover.height() : 10) || $('body').hasClass('modal-open')) {
                this.headerUp();
            } else {
                this.headerDown();
            }
        });

        if ($(window).scrollTop() > (pageHasCover.length ? pageHasCover.height() : 10)) {
            this.headerUp();
        }

        this.scrollPage();
    }

    headerUp() {
        $(".header").addClass('header-scroll-up');
    }

    headerDown() {
        $(".header").removeClass('header-scroll-up');
    }

    scrollPage() {
        var scrollPos = 0;

        $(window).on("scroll", () => {
            var st = $(window).scrollTop();

            if (st > 100) {
                $(".header").addClass("header-scroll-down header-colorized");
                if (st > scrollPos) {
                    $(".header").addClass("header-scroll-down");
                } else {
                    $(".header").removeClass("header-scroll-down");
                }
            } else {
                $(".header").removeClass("header-scroll-down header-colorized");
            }

            scrollPos = st;
        });
    }
}

new Header();