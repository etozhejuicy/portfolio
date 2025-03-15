class Routes {
    constructor() {
        this.urls = {
            works: './works',
            index: './',
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