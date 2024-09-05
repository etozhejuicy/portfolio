class Items {
  constructor() {
    window.addEventListener("load", (e) => {
      this.events();
    });
  }

  events() {
    let items = [
        {
          title: "Академия Звука",
          image: "/works/akademia_zvuka.png",
          description:
            "«Академия Звука» – это музыкальное пространство, в котором каждый может искать себя, не отвлекаясь на бытовые проблемы.",
          link: "http://akademiazvuka.ru/",
        },
        {
          title: "Читай детям",
          image: "/works/kids_read.png",
          description:
            "Мастер-классы по созданию книжного контента для детей и родителей",
          link: "http://chitaisdetmi.lirflagman.beget.tech/",
        },
        {
          title: "Лагерь Креативных Лидеров",
          image: "/works/creative_leaders.png",
          description:
            "Образовательный проект для предпринимателей в креативных индустриях",
          link: "https://creative-leaders.ru/",
        },
        {
          title: "Креативный Путь",
          image: "/works/creative_way.png",
          description: "Сориентируем на карте креативных индустрий России",
          link: "https://creative-way.ru/",
        },
        {
          title: "Инносоциум",
          image: "/works/innosocium.png",
          description:
            "Социальная платформа Фонда Росконгресс, обеспечивающая поддержку социально значимых проектов, креативных отраслей экономики, молодежных инициатив и образования.",
          link: "https://innosocium.org/",
        },
        {
          title: "Экосистема Города",
          image: "/works/urbanecosystem.png",
          description:
            "Первая всероссийская платформа развития территорий, работающая с задачами федерального значения. ",
          link: "https://urbanecosystem.ru/",
        },
        {
          title: "Millennium для клиентов",
          image: "/works/millennium_client.png",
          description:
            "Millennium - сервис организации командировок и деловых поездок в Москве и по всей России",
          link: "https://millennium-dream.ru/",
        },
        {
          title: "Millennium Администратор",
          image: "/works/millennium_admin.png",
          description:
            "Современная online-платформа по управлению командировками и MICE",
          link: "https://millennium-platform.ru/",
        },
      ],
      itemsList = document.querySelector("[items-list]");

    //  sort items
    items = items.sort((a, b) => {
      var a1 = a.title.toLowerCase();
      var b1 = b.title.toLowerCase();
      return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
    });

    items.map((a) => a.title);

    if (itemsList) {
      for (const item of items) {
        const colItem = document.createElement("div");
        colItem.className = "col-12 col-md-6";
        colItem.innerHTML = `
                <div class="card card-glass card-work">
                    <div class="card-content">
                        <div class="row g-3">
                            <div class="col-12">
                                <div class="card-title">
                                    ${item.title}
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card-image rounded">
                                    <img data-src="${item.image}" class="lazyload" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card-body">
                                    <p>
                                        ${item.description}
                                    </p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card-footer cursor-effect">
                                    <a href="${item.link}" class="btn btn-white w-100" target="_blank" rel="noopener noreferrer">Посетить сайт</a>
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
