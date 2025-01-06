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
            <div class="container">
                <div class="header-inner">
                    <div class="row g-2 g-md-4">
                        <div class="col-auto">
                            <div class="header-logo cursor-effect">
                                <img data-src="` +
            logo +
            `" class="lazyload" />
                                <a href="./" class="stretched-link"></a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="header-navigation">
                                <nav class="nav nav-horizontal" navigation="header"></nav>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="header-button cursor-effect">
                                <button type="button" class="btn btn-white btn-colored btn-sm btn-icon btn-icon-burger position-relative" data-menu-open="">
                                    <i class="cl-icon-menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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