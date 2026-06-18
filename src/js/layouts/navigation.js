class Navigation {
    constructor() {
        window.addEventListener("DOMContentLoaded", (e) => {
            this.events();
        });
    }

    events() {
        this.initNavigation();
        this.isUnderConstruction(); // TODO
    }

    initNavigation() {
        let pageURL = window.location.pathname,
            lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1),
            navAreas = document.querySelectorAll("nav");

        for (const navArea of navAreas) {
            if (!navArea) return;

            const navLinks = navArea.querySelectorAll('.nav-link');

            navLinks.forEach((navLink) => {
                let linkHref = navLink.getAttribute('href');

                linkHref = linkHref.substr(linkHref.lastIndexOf('/') + 1);
                
                navLink.classList.toggle('active', lastURLSegment === linkHref);
            });            
        }
    }

    isUnderConstruction() {
        let navAreas = document.querySelectorAll("nav");

        for (const navArea of navAreas) {
            if (!navArea) return;

            const navLinks = Array.from(navArea.querySelectorAll('.nav-link'));

            // choose two last elems of navigation
            const elemsToDelete = navLinks.slice(-2);

            elemsToDelete.forEach((items) => {
                items.remove();
            });
        }
    }
}

new Navigation();