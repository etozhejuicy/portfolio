import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

let items = [
  {
    title: "Академия Звука",
    image: "./items/works/akademia_zvuka.png",
    description:
      "«Академия Звука» – это музыкальное пространство, в котором каждый может искать себя, не отвлекаясь на бытовые проблемы.",
    link: "http://akademiazvuka.ru/",
    rate: "55",
    layout:
      "https://www.figma.com/design/d6D2GLRLq8UMibIR7SDDyA/Untitled?node-id=0-1&node-type=canvas&t=9dTDq00Irqo9PWYi-0",
  },
  {
    title: "Читай детям",
    image: "./items/works/kids_read.png",
    description:
      "Мастер-классы по созданию книжного контента для детей и родителей",
    link: "http://chitaisdetmi.lirflagman.beget.tech/",
    rate: "37",
    layout:
      "https://www.figma.com/design/h6s741ZjR2IH91wZC77qIA/%D0%A7%D0%B8%D1%82%D0%B0%D0%B9-%D0%94%D0%B5%D1%82%D1%8F%D0%BC?m=auto&t=PKAZXoddACneJqQP-6",
  },
  {
    title: "Метод",
    image: "./items/works/metod.png",
    description:
      "Всероссийский образовательный проект ­ для писателей и сценаристов кино",
    link: "https://metod.one/",
    rate: "39",
    layout:
      "https://www.figma.com/design/3E2AA9oPeYnMfXzvVuys7F/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4?t=PKAZXoddACneJqQP-0",
  },
  {
    title: "Лагерь Креативных Лидеров",
    image: "./items/works/creative_leaders.png",
    description:
      "Образовательный проект для предпринимателей в креативных индустриях",
    link: "https://creative-leaders.ru/",
    rate: "54",
    layout:
      "https://www.figma.com/design/V4BsMmUqHxDISsOSacFX9X/CLC?node-id=0-1&node-type=canvas&t=5r18EQcQBotiiBao-0",
  },
  {
    title: "Креативный Путь",
    image: "./items/works/creative_way.png",
    description: "Сориентируем на карте креативных индустрий России",
    link: "https://creative-way.ru/",
    rate: "53",
    layout:
      "https://www.figma.com/design/fbnQcPWfu8jw1Hc2GgHV41/%D0%9A%D1%80%D0%B5%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BF%D1%83%D1%82%D1%8C?node-id=0-1&node-type=canvas&t=3MsLf8Cl2v5BfWjT-0",
  },
  {
    title: "Инносоциум",
    image: "./items/works/innosocium.png",
    description:
      "Социальная платформа Фонда Росконгресс, обеспечивающая поддержку социально значимых проектов, креативных отраслей экономики, молодежных инициатив и образования.",
    link: "https://innosocium.org/",
    rate: "58",
    layout:
      "https://www.figma.com/design/auFznDRV3MBIuTDPljEeG7/Innosocium?node-id=0-1&node-type=canvas&t=uAV5hT6GKWy39kc6-0",
  },
  {
    title: "Инносоциум - конкурс",
    image: "./items/works/innosocium-contest.png",
    description: "Всероссийский конкурс социальных проектов Инносоциум.",
    link: "https://innosocium.ru/",
    rate: "18",
  },
  {
    title: "Russian Creative Awards 2021",
    image: "./items/works/rcawards.png",
    description: "Национальная премия в области креативных индустрий",
    link: "https://rc-awards.ru/",
    rate: "49",
    layout:
      "https://www.figma.com/design/x49ksEHCVtigvCHjvNk5t5/R.C.Award?node-id=662-1996&node-type=frame&t=lVjXO9X24Sy5TIEV-0",
  },
  {
    title: "Russian Creative Industries",
    image: "./items/works/rci.png",
    description: "СМИ посвященное креативным индустриям",
    rate: "48",
    layout:
      "https://www.figma.com/design/IMcsen0mKR9wlLgjM0vF6t/RCI-by-RCW?node-id=0-1&node-type=canvas&t=zuPlnmwhKsL0wB7v-0",
  },
  {
    title: "Notegram",
    image: "./items/works/notegram.png",
    description:
      "Платформа с возможностью размещать свой контент и делиться опытом со всеми посетителями сайта.",
    link: "https://notegram.ru/",
    rate: "40",
  },
  {
    title: "Art Team",
    image: "./items/works/arteam.png",
    description:
      "Всероссийский конкурс для авторов проектов в сфере креативных индустрий.",
    link: "https://art-team.moscow/",
    rate: "42",
    layout:
      "https://www.figma.com/design/AEyfcvReOTcYwiDri00I93/Art-Team.-%D0%A0%D0%B5%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B9.?node-id=349-248&node-type=frame&t=WfGFnYYoeAqRofbl-0",
  },
  {
    title: "Российская Креативная Неделя",
    image: "./items/works/rcw.png",
    description:
      "Крупнейшее федеральное событие в сфере креативных индустрий, объединяющее представителей 16 направлений креативных индустрий России",
    link: "https://creativityweek.ru/",
    rate: "52",
    layout:
      "https://www.figma.com/design/jtzCy9q2ckMvLiEM9zknJj/RCW-full?node-id=0-1&node-type=canvas&t=XywucLHfc6EXPvP1-0",
  },
  {
    title: "РКН Сибирь",
    image: "./items/works/rcwsib.png",
    description:
      "Третий окружной форум «Российская креативная неделя – Сибирь»",
    link: "https://sib.creativityweek.ru/",
    rate: "50",
    layout:
      "https://www.figma.com/design/DWEVaSiVV6c6pJFEmi1ffy/%D0%A0%D0%9A%D0%9D-%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D1%8C?t=6IWUtO9RuljUZkKj-0",
  },
  {
    title: "Креативная Экономика",
    image: "./items/works/creconomy.png",
    description:
      "Многопрофильный центр развития креативных индустрий России, инициатор и организатор крупнейших федеральных мероприятий.",
    link: "https://creative-economy.ru/",
    rate: "55",
    layout:
      "https://www.figma.com/design/UW8RvMrNLlLYTws1vUBHqm/%D0%9A%D0%A0%D0%AD%D0%9A?node-id=0-1&node-type=canvas&t=ZoKAXuXMVtGRvQ5b-0",
  },
  {
    title: "Сэлт Флейм",
    image: "./items/works/seltflame.png",
    description:
      "Камины в Воронеже. Магазин каминов, где можно купить готовый камин с доставкой на дом.",
    link: "https://seltflame.ru/",
    rate: "20",
  },
  {
    title: "Сэлт Климат",
    image: "./items/works/seltclimat.png",
    description:
      "Сэлт Климат - официальный дилер самых надежных производителей климатического оборудования. ",
    link: "https://seltclimat.ru/",
    rate: "21",
  },
  {
    title: "Сэлт Воронеж",
    image: "./items/works/selt.png",
    description: "Изготовление жалюзи всех видов в Воронеже",
    link: "https://seltvrn.ru/",
    rate: "20",
  },
  {
    title: "Детский фестиваль искусств",
    image: "./items/works/happy_fest.png",
    description:
      "Масштабный фестиваль для детей, подростков и взрослых в парке горького",
    link: "https://happy-fest.ru/",
    rate: "32",
    layout:
      "https://www.figma.com/design/JxAjhCjmn5F8MJUV8TdF1R/%C2%AB%D0%9D%D0%B5%D0%B1%D0%BE%C2%BB-%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9--%D1%84%D0%B5%D1%81%D1%82%D0%B8%D0%B2%D0%B0%D0%BB%D1%8C-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2?node-id=770-3937&node-type=canvas&t=mq9ioMWO0ipNjtjw-0",
  },
  {
    title: "Nera.digital",
    image: "./items/works/nera_digital.png",
    description:
      "Улучшаем качество жизни через свои продукты, делая лучшее из возможного, по своим силам, погружаясь в рынок клиента.",
    link: "https://nera.digital/",
    rate: "61",
    layout:
      "https://www.figma.com/design/XUY1PsKg8f2wnbpkqEfXsc/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0?node-id=0-1&node-type=canvas&t=LCRKPA41M2HKiutK-0",
  },
  {
    title: "Nera",
    image: "./items/works/nera.png",
    description:
      "NERA помогает быстрее получить желаемое и достичь любых целей.",
    link: "https://nera.one/",
    rate: "62",
    layout:
      "https://www.figma.com/design/ux6HDM7zvlX9dMPq7aE3yu/Nera.One?node-id=0-1&node-type=canvas&t=xI0lPpuOaMJ8vZpD-0",
  },
  {
    title: "Nera Education",
    image: "./items/works/nera_edu.png",
    description:
      "Персональный цифровой наставник, для самосовершенствования и построения личной стратегии жизни.",
    link: "https://edu.nera.one/",
    rate: "60",
    layout:
      "https://www.figma.com/design/m6qYBUy06MzUZc6PYdpq7s/Nera-App-(shared)?t=XVrRzA9mLgimKMlx-0",
  },
  {
    title: "Воркшоп Цели и ценности",
    image: "./items/works/workshop.png",
    description:
      "Ценности — основа целей, они помогают сохранять мотивацию и не идти за чужими мечтами.",
    link: "https://workshop.nera.one/",
    rate: "35",
    layout:
      "https://www.figma.com/design/lkv55HOCGtZt9rTQ4Qmyjv/%D0%A6%D0%B5%D0%BB%D0%B8-%D0%B8-%D1%86%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-(landing)?node-id=0-1&node-type=canvas&t=UITRi6ESAmEHCo9s-0",
  },
  {
    title: "Калькулятор вывесок",
    image: "./items/works/kalkulator.png",
    description:
      "Калькулятор стоимости на Дизайн, производство, монтаж и согласование наружной рекламы, МАФ, входных групп.",
    link: "https://a1mgc.ru/kalkulyator",
    rate: "11",
  },
  {
    title: "Goal Bet",
    image: "./items/works/goal_bet.png",
    description: "Бесплатные математические прогнозы на спорт",
    link: "https://goal-bet.ru/",
    rate: "10",
  },
  {
    title: "Достоевский",
    image: "./items/works/dostoevsky.png",
    description:
      "Фестиваль-путешествие «Достоевский» — первое культурное событие, сомасштабное личности писателя.",
    link: "https://dostoevskyfest.ru/",
    rate: "59",
    layout:
      "https://www.figma.com/design/8vnkRuJMcOKzkmzK0wHmw6/Dostoevsky?node-id=1-3174&node-type=canvas&t=RboVrdNR4l2OMdqj-0",
  },
  {
    title: "Экосистема Города",
    image: "./items/works/urbanecosystem.png",
    description:
      "Первая всероссийская платформа развития территорий, работающая с задачами федерального значения. ",
    link: "https://urbanecosystem.ru/",
    rate: "57",
    layout:
      "https://www.figma.com/design/5lvcourDkbwEeaM3t2lrZ0/%D0%AD%D0%BA%D0%BE%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%22%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%22?node-id=0-1&node-type=canvas&t=EUqCb4yvterE1paj-0",
  },
  {
    title: "Миллениум для клиентов",
    image: "./items/works/millennium_client.png",
    description:
      "Millennium - сервис организации командировок и деловых поездок в Москве и по всей России",
    link: "https://millennium-dream.ru/",
    rate: "36",
    layout:
      "https://www.figma.com/design/w4K84IXLtPET02J2KOcSDV/Millennium-%3A%3A-CLIENT?t=nVo3pVXRW3MKx838-0",
  },
  {
    title: "Миллениум Администратор",
    image: "./items/works/millennium_admin.png",
    description:
      "Современная online-платформа по управлению командировками и MICE",
    link: "https://millennium-platform.ru/",
    rate: "28",
    layout:
      "https://www.figma.com/design/wbqL1Ua289K8eKRdyfHbz5/Millennium-WEB?t=nVo3pVXRW3MKx838-0",
  },
];

class Items {
  constructor() {
    window.addEventListener("load", () => {
      this.events();
      this.scrollEffect();
    });
  }

  events() {
    let itemsList = document.querySelector("[items-list]");

    //  sort items
    items = items.sort((a, b) => {
      var a1 = a.rate.toLowerCase();
      var b1 = b.rate.toLowerCase();
      return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
    });

    items.map((a) => a.title);

    if (itemsList) {
      // include id for items
      items.forEach((item, index) => {
        item.id = index + 1;
      });

      // foreach of items
      for (const item of items) {
        const colItem = document.createElement("div");
        colItem.className = "col-12 col-md-6 box";
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
                                <div class="card-image rounded lazyload cursor-effect" data-expand="-10" item-id="${
                                  item.id
                                }">
                                    <img data-src="${
                                      item.image
                                    }" class="lazyload wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s" />
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
                                <div class="card-footer">
                                    <div class="row g-2">
                                    ${
                                      item.link
                                        ? `
                                      <div class="col-auto cursor-effect">
                                        <a href="${item.link}" class="btn btn-white btn-icon w-100" target="_blank" rel="noopener noreferrer">
                                          <i class="cl-icon-link"></i>
                                        </a>
                                      </div>
                                      `
                                        : ""
                                    }
                                      ${
                                        item.layout
                                          ? `<div class="col-auto cursor-effect">
                                              <a href="${item.layout}" class="btn btn-purple btn-icon w-100" target="_blank" rel="noopener noreferrer">
                                                <i class="cl-icon-map2"></i>
                                                <span class="btn-icon-text">Макет</span>
                                              </a>
                                            </div>`
                                          : ""
                                      }
                                    </div>
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

  scrollEffect() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll("[items-list] .box").forEach((box, i) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          start: "top top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          scrub: i * 0.2,
        },
        opacity: 0,
        duration: 1,
      });
    });
  }
}

new Items();
