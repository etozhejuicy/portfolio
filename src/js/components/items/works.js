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
          title: "Инносоциум - конкурс",
          image: "/works/innosocium-contest.png",
          description: "Всероссийский конкурс социальных проектов Инносоциум.",
          link: "https://innosocium.ru/",
        },
        {
          title: "Notegram",
          image: "/works/notegram.png",
          description:
            "Платформа с возможностью размещать свой контент и делиться опытом со всеми посетителями сайта.",
          link: "https://notegram.ru/",
        },
        {
          title: "Сэлт Флейм",
          image: "/works/seltflame.png",
          description:
            "Камины в Воронеже. Магазин каминов, где можно купить готовый камин с доставкой на дом.",
          link: "https://seltflame.ru/",
        },
        {
          title: "Сэлт Климат",
          image: "/works/seltclimat.png",
          description:
            "Сэлт Климат - официальный дилер самых надежных производителей климатического оборудования. ",
          link: "https://seltclimat.ru/",
        },
        {
          title: "Сэлт Воронеж",
          image: "/works/selt.png",
          description: "Изготовление жалюзи всех видов в Воронеже",
          link: "https://seltvrn.ru/",
        },
        {
          title: "Детский фестиваль искусств",
          image: "/works/happy_fest.png",
          description:
            "Масштабный фестиваль для детей, подростков и взрослых в парке горького",
          link: "https://happy-fest.ru/",
        },
        {
          title: "Nera.digital",
          image: "/works/nera_digital.png",
          description:
            "Улучшаем качество жизни через свои продукты, делая лучшее из возможного, по своим силам, погружаясь в рынок клиента.",
          link: "https://nera.digital/",
        },
        {
          title: "Nera",
          image: "/works/nera.png",
          description:
            "NERA помогает быстрее получить желаемое и достичь любых целей.",
          link: "https://nera.one/",
        },
        {
          title: "Nera Education",
          image: "/works/nera_edu.png",
          description:
            "Персональный цифровой наставник, для самосовершенствования и построения личной стратегии жизни.",
          link: "https://edu.nera.one/",
        },
        {
          title: "Воркшоп Цели и ценности",
          image: "/works/workshop.png",
          description:
            "Ценности — основа целей, они помогают сохранять мотивацию и не идти за чужими мечтами.",
          link: "https://workshop.nera.one/",
        },
        {
          title: "Калькулятор вывесок",
          image: "/works/kalkulator.png",
          description:
            "Калькулятор стоимости на Дизайн, производство, монтаж и согласование наружной рекламы, МАФ, входных групп.",
          link: "https://a1mgc.ru/kalkulyator",
        },
        {
          title: "Goal Bet",
          image: "/works/goal_bet.png",
          description: "Бесплатные математические прогнозы на спорт",
          link: "https://goal-bet.ru/",
        },
        {
          title: "Достоевский",
          image: "/works/dostoevsky.png",
          description:
            "Фестиваль-путешествие «Достоевский» — первое культурное событие, сомасштабное личности писателя.",
          link: "https://dostoevskyfest.ru/",
        },
        {
          title: "Экосистема Города",
          image: "/works/urbanecosystem.png",
          description:
            "Первая всероссийская платформа развития территорий, работающая с задачами федерального значения. ",
          link: "https://urbanecosystem.ru/",
        },
        {
          title: "Миллениум для клиентов",
          image: "/works/millennium_client.png",
          description:
            "Millennium - сервис организации командировок и деловых поездок в Москве и по всей России",
          link: "https://millennium-dream.ru/",
        },
        {
          title: "Миллениум Администратор",
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
                    <div class="card-content wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s">
                        <div class="row g-3">
                            <div class="col-12">
                                <div class="card-title">
                                    ${item.title}
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card-image rounded lazyload" data-expand="-10">
                                    <img data-src="${item.image}" class="lazyload wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card-body">
                                    <p class="wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                                        ${item.description}
                                    </p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card-footer cursor-effect">
                                    <a href="${item.link}" class="btn btn-white w-100" target="_blank" rel="noopener noreferrer">Посетить сайт проекта</a>
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
