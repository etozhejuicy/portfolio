// routes
import routes from "../class/routes";

class Navigation {
    constructor() {
        window.addEventListener("load", (e) => {
            this.events();
        });
    }

    events() {
        let pageURL = window.location.pathname,
            lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1),
            items = [{
                name: "Главная",
                path: "index",
            },
            {
                name: "Работы",
                path: "works",
            },
            {
                name: "Обо мне",
                path: "about",
            },
            {
                name: "Обратная связь",
                path: "contacts",
            },
            ],
            navAreas = document.querySelectorAll("[navigation]");

        for (const navArea of navAreas) {
            if (navArea) {
                for (const item of items) {
                    const navItem = document.createElement("div");
                    navItem.className = "nav-item";
                    navItem.innerHTML = `
                                        <a href="${routes.urls[`${item.path}`]}" class="nav-link ${item.path === lastURLSegment ? "active" : ""
                        }" url="/${item.path}">
                                                ${item.name}
                                        </a>
                                        `;
                    navArea.appendChild(navItem);
                }
            }
        }
    }
}

new Navigation();