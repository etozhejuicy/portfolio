let now = new Date().getFullYear(),
    nowElem = document.querySelector('.footer .now');

class Footer {
    constructor() {
        this.events();
    }

    events() {
        document.addEventListener('DOMContentLoaded', () => {
            nowElem.innerText = now;
        });
    }
}

new Footer;