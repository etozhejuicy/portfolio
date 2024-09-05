const cursor = document.createElement("div");

class Cursor {
    constructor() {
        window.addEventListener("DOMContentLoaded", () => {
            this.events();
        });
    }

    events() {
        let main = document.querySelector("main");

        cursor.classList.add('cursor');
        main.parentElement.append(cursor);

        this.moving();
        $(window).on('mousemove', () => {
            this.effect();
        });
    }

    moving() {
        $(window).on('mousemove', (e) => {
            $('.cursor').css({
                top: e.pageY + 'px',
                left: e.pageX + 'px',
            });
        });
    }

    effect() {
        let elem = $('.cursor-effect');

        elem.on('mouseenter click touchstart', () => {
            $('.cursor').css('transform', 'translate(-50%, -50%) scale(8)');
        });

        elem.on('mouseleave touchend', () => {
            $('.cursor').css('transform', 'none');
        });
    }
}

new Cursor();