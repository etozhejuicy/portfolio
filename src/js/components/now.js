let nowDate = new Date().getFullYear(),
    nowElems = document.querySelectorAll('.now');

class Now {
    constructor() {
        this.events();
    }

    events() {
        document.addEventListener('DOMContentLoaded', () => {
            nowElems.forEach((nowElem) => {
                nowElem.innerText = nowDate;
            });
        });
    }
}

new Now;