class Routes {
    constructor() {
        this.urls = {
            index: './',
            works: './works',
            about: './about',
            contacts: './contacts',
        };
    }

    getUrl(route) {
        return this.urls[route] || null;
    }
}

const routes = new Routes();

export default routes;