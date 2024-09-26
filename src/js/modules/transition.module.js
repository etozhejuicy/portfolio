import Preloader from "../class/Preloader";

const internalLinks = document.querySelectorAll('a');

internalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const preloader = new Preloader();

        setTimeout(() => {
            window.location.href = link.href;
        }, preloader.options.duration + preloader.options.closing - preloader.options.remove);
    });
});