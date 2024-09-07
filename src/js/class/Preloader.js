import LenisScroll from "../class/Lenis";

const loader = document.createElement("div");

class Preloader {
    constructor() {
        this.events();
    }

    events() {
        LenisScroll.lenis.stop();
        window.addEventListener("DOMContentLoaded", () => {
            this.init();
        });
    }

    init() {
        let main = document.querySelector("main");

        loader.classList.add('preloader');
        loader.innerHTML = `
            <div class="preloader-container">
                <div class="preloader-spinner"></div>
            </div>
        `;

        main.parentElement.prepend(loader);
        this.animatedList();
    }

    animatedList() {
        if (loader) {
            $('html').css('display', 'block');
            $('body').removeClass('preloader-init');
            $('body').addClass('preloader-active');
            setTimeout(() => {
                this.closing();
            }, 1500);
        }
    }

    closing() {
        $('.preloader').css('transform', 'scale(0)');
        $('body').removeClass('preloader-active');
        $('body').addClass('preloader-hidden');
        this.destroy();
    }

    destroy() {
        setTimeout(() => {
            $('body').removeClass('preloader-hidden');
            LenisScroll.lenis.start();
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    }
}

new Preloader();