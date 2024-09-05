class Items {
    constructor() {
        window.addEventListener("load", (e) => {
            this.events();
        });
    }

    events() {
        let items = [
            {
                'title': 'Академия Звука',
                'image': '/works/akademia_zvuka.png',
                'description': '«Академия Звука» – это музыкальное пространство, в котором каждый может искать себя, не отвлекаясь на бытовые проблемы.',
                'link': 'http://akademiazvuka.ru/'
            },
        ],
            itemsList = document.querySelector('[items-list]');

        if (itemsList) {
            for (const item of items) {
                const colItem = document.createElement('div');
                colItem.className = 'col-12 col-md-6';
                colItem.innerHTML = `
                <div class="card card-glass">
                    <div class="card-content">
                        <div class="row g-3">
                            <div class="col-12">
                                <div class="card-title">
                                    ${item.title}
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card-body">
                                    <div class="card-image rounded overflow-hidden">
                                        <img data-src="${item.image}" class="lazyload w-100" />
                                    </div>
                                    <p>
                                        ${item.description}
                                    </p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card-footer cursor-effect">
                                    <a href="${item.link}" class="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">Посетить сайт</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `;
                itemsList.appendChild(colItem);
            }
        }
    }
}

new Items();