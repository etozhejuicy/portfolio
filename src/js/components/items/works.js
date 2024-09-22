import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

let items = [
  {
    title: "Академия Звука",
    image: "./items/works/akademia_zvuka.png",
    brief:
      "«Академия Звука» – это музыкальное пространство, в котором каждый может искать себя, не отвлекаясь на бытовые проблемы.",
    description:
      "«Фабрика Музыки» — это серия 9-ти дневных музыкальных резиденций, формирующих новое поколение музыкальной индустрии России.</p> <p>В рамках резиденции команды работают в тройках над комплексным созданием сингла: артисты и продюсеры — создают песню, а менеджеры разрабатывают стратегию позиционирования и продвижения.В последний день команды презентуют проект экспертам из музыкальной индустрии.</p> <p>Резиденция — это маленькая жизнь, наполненная новыми знаниями, друзьями и возможностями.</p> <p>«Фабрика Музыки» – это музыкальное пространство, в котором каждый может искать себя, не отвлекаясь на бытовые проблемы.</p> <p>При поддержке АКИ и СТУДИО от HiFi - стриминга Звука.</p>",
    link: "http://akademiazvuka.ru/",
    rate: "55",
    layout:
      "https://www.figma.com/design/d6D2GLRLq8UMibIR7SDDyA/Untitled?node-id=0-1&node-type=canvas&t=9dTDq00Irqo9PWYi-0",
  },
  {
    title: "Читай детям",
    image: "./items/works/kids_read.png",
    brief: "Мастер-классы по созданию книжного контента для детей и родителей",
    description:
      "<p>Российский книжный союз при поддержке Президентского фонда культурных инициатив реализует федеральный проект «Читай с детьми». Актуальность и особая ценность проекта в том, что он стартовал в 2024 году, который объявлен президентом РФ Годом семьи в России.</p> <p>Главная цель проекта «Читай с детьми» - повышение мотивации к чтению и вовлечение различных аудиторий: семей с детьми, педагогическое сообщество, представителей органов исполнительной власти, профессионалов литературно-издательской индустрии.</p> <p>Создание общими усилиями пространства любви к книге и чтению с юного возраста. </p> <p>Проект объединяет в себе образовательные и культурно-развлекательные мероприятия для детей и взрослых, а также включает профессиональный блок. Одна из задач - интеграция в яркие книжные фестивали в разных городах: от Москвы до Новосибирска, от Казани до Архангельска.</p>",
    link: "http://chitaisdetmi.lirflagman.beget.tech/",
    rate: "37",
    layout:
      "https://www.figma.com/design/h6s741ZjR2IH91wZC77qIA/%D0%A7%D0%B8%D1%82%D0%B0%D0%B9-%D0%94%D0%B5%D1%82%D1%8F%D0%BC?m=auto&t=PKAZXoddACneJqQP-6",
  },
  {
    title: "Метод",
    image: "./items/works/metod.png",
    brief:
      "Всероссийский образовательный проект ­ для писателей и сценаристов кино",
    description:
      "<p>«Метод» — образовательный проект для писателей и сценаристов кино, для людей, работающих с интересными историями и текстами.</p> <p>«Метод» аккумулирует системы обучения передовых сценарных школ и опыт признанных мастеров. </p> <p>Мы научим правильно оформлять идею в профессиональный синопсис и готовый сценарный проект.</p>",
    link: "https://metod.one/",
    rate: "39",
    layout:
      "https://www.figma.com/design/3E2AA9oPeYnMfXzvVuys7F/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4?t=PKAZXoddACneJqQP-0",
  },
  {
    title: "Лагерь Креативных Лидеров",
    image: "./items/works/creative_leaders.png",
    brief:
      "Образовательный проект для предпринимателей в креативных индустриях",
    description:
      "<p>Образовательный проект для предпринимателей в креативных индустриях.</p> <p>Формируем авторский подход к управлению. Развиваем навыки осознанного лидерства и креативной трансформации бизнеса</p>",
    link: "https://creative-leaders.ru/",
    rate: "54",
    layout:
      "https://www.figma.com/design/V4BsMmUqHxDISsOSacFX9X/CLC?node-id=0-1&node-type=canvas&t=5r18EQcQBotiiBao-0",
  },
  {
    title: "Креативный Путь",
    image: "./items/works/creative_way.png",
    brief: "Сориентируем на карте креативных индустрий России",
    description:
      "<p>Пошаговый маршрут развития в креативных индустриях, основанный на упорядоченности процессов, гибкости мышления и партнёрстве.</p> <p>Ориентируемся в возможностях рынка и знаем, как эффективно использовать их потенциал. научим, как ими пользоваться.</p>",
    link: "https://creative-way.ru/",
    rate: "53",
    layout:
      "https://www.figma.com/design/fbnQcPWfu8jw1Hc2GgHV41/%D0%9A%D1%80%D0%B5%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BF%D1%83%D1%82%D1%8C?node-id=0-1&node-type=canvas&t=3MsLf8Cl2v5BfWjT-0",
  },
  {
    title: "Инносоциум",
    image: "./items/works/innosocium.png",
    brief:
      "Социальная платформа Фонда Росконгресс, обеспечивающая поддержку социально значимых проектов, креативных отраслей экономики, молодежных инициатив и образования.",
    description:
      "<p>Фонд Инносоциум – социальная платформа Фонда Росконгресс, обеспечивающая поддержку социально значимых проектов, креативных отраслей экономики, молодежных инициатив и образования. Мы развиваем креативную экономику, сохраняем культурное наследие и поддерживаем социально-значимые инициативы</p>",
    link: "https://innosocium.org/",
    rate: "58",
    layout:
      "https://www.figma.com/design/auFznDRV3MBIuTDPljEeG7/Innosocium?node-id=0-1&node-type=canvas&t=uAV5hT6GKWy39kc6-0",
  },
  {
    title: "Инносоциум - конкурс",
    image: "./items/works/innosocium-contest.png",
    brief: "Всероссийский конкурс социальных проектов Инносоциум.",
    description:
      "<p>Цель конкурса — привлечь внимание к актуальным социально значимым проблемам и способам их решения, выявить и поощрить талантливых студентов к разработке и реализации социальных проектов, развить у них необходимые для этого навыки, а также распространить эффективный опыт социального проектирования в студенческой среде.</p> <p>Перспективные проекты, разработанные студентами, оценит экспертный совет Конкурса, в который вошли ректоры и руководители подразделений ведущих российских ВУЗов, представители власти и бизнеса, а также креативных агентств.</p> <p>Победители Всероссийского конкурса социальных проектов «Инносоциум» будут объявлены в марте 2025 года и получат возможность воплотить свои проекты на практике.</p>",
    link: "https://innosocium.ru/",
    rate: "18",
  },
  {
    title: "Russian Creative Awards 2021",
    image: "./items/works/rcawards.png",
    brief: "Национальная премия в области креативных индустрий",
    description:
      "<p>Russian Creative Awards – единственная в мире премия, охватывающая все креативные отрасли. Это высшая награда для творческого сообщества страны, которая ежегодно вручается за вклад в развитие креативного сектора экономики.</p>",
    link: "https://rc-awards.ru/",
    rate: "49",
    layout:
      "https://www.figma.com/design/x49ksEHCVtigvCHjvNk5t5/R.C.Award?node-id=662-1996&node-type=frame&t=lVjXO9X24Sy5TIEV-0",
  },
  {
    title: "Russian Creative Industries",
    image: "./items/works/rci.png",
    brief: "СМИ посвященное креативным индустриям",
    rate: "48",
    layout:
      "https://www.figma.com/design/IMcsen0mKR9wlLgjM0vF6t/RCI-by-RCW?node-id=0-1&node-type=canvas&t=zuPlnmwhKsL0wB7v-0",
  },
  {
    title: "Notegram",
    image: "./items/works/notegram.png",
    brief:
      "Платформа с возможностью размещать свой контент и делиться опытом со всеми посетителями сайта.",
    link: "https://notegram.ru/",
    rate: "40",
  },
  {
    title: "Art Team",
    image: "./items/works/arteam.png",
    brief:
      "Всероссийский конкурс для авторов проектов в сфере креативных индустрий.",
    description:
      "<p>Бесплатная образовательная платформа. Практические курсы по формированию навыков для реализации и упаковки проектов💡</p>",
    link: "https://art-team.moscow/",
    rate: "42",
    layout:
      "https://www.figma.com/design/AEyfcvReOTcYwiDri00I93/Art-Team.-%D0%A0%D0%B5%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B9.?node-id=349-248&node-type=frame&t=WfGFnYYoeAqRofbl-0",
  },
  {
    title: "Российская Креативная Неделя",
    image: "./items/works/rcw.png",
    brief:
      "Крупнейшее федеральное событие в сфере креативных индустрий, объединяющее представителей 16 направлений креативных индустрий России",
    description:
      "<p>Российская креативная неделя – это профессиональное сообщество, объединяющее представителей 16 креативных индустрий России. Единственная федеральная площадка, на которой проектируется будущее национальной креативной экономики, отмечаются ключевые достижения и презентуются новые инициативы и проекты.</p>",
    link: "https://creativityweek.ru/",
    rate: "52",
    layout:
      "https://www.figma.com/design/jtzCy9q2ckMvLiEM9zknJj/RCW-full?node-id=0-1&node-type=canvas&t=XywucLHfc6EXPvP1-0",
  },
  {
    title: "РКН Сибирь",
    image: "./items/works/rcwsib.png",
    brief: "Третий окружной форум «Российская креативная неделя – Сибирь»",
    description:
      "<p>Третий окружной форум «Российская креативная неделя – Сибирь» соберет на одной площадке представителей креативного бизнеса, исследовательских компаний, медиарынка, сырьевого бизнеса региона, а также представителей федеральных и региональных органов власти и институтов развития.</p>",
    link: "https://sib.creativityweek.ru/",
    rate: "50",
    layout:
      "https://www.figma.com/design/DWEVaSiVV6c6pJFEmi1ffy/%D0%A0%D0%9A%D0%9D-%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D1%8C?t=6IWUtO9RuljUZkKj-0",
  },
  {
    title: "Креативная Экономика",
    image: "./items/works/creconomy.png",
    brief:
      "Автономная некомеррческая организация поддержки и развития креативных индустрий.",
    description:
      "<p>Многопрофильный центр развития креативных индустрий России, инициатор и организатор крупнейших федеральных мероприятий.</p>",
    link: "https://creative-economy.ru/",
    rate: "55",
    layout:
      "https://www.figma.com/design/UW8RvMrNLlLYTws1vUBHqm/%D0%9A%D0%A0%D0%AD%D0%9A?node-id=0-1&node-type=canvas&t=ZoKAXuXMVtGRvQ5b-0",
  },
  {
    title: "Сэлт Флейм",
    image: "./items/works/seltflame.png",
    brief:
      "Камины в Воронеже. Магазин каминов, где можно купить готовый камин с доставкой на дом.",
    description:
      "<p>Создать совершенно особенную уютную и престижную обстановку. Камин – способ привнести в дом не только визуальную красоту, но дополнительную функциональность, ведь сегодня виды каминов представлены не только классическими, но и концептуальными современными моделями.</p>",
    link: "https://seltflame.ru/",
    rate: "20",
  },
  {
    title: "Сэлт Климат",
    image: "./items/works/seltclimat.png",
    brief:
      "Сэлт Климат - официальный дилер самых надежных производителей климатического оборудования. ",
    description:
      "<p>Подбор и монтаж кондиционеров в Воронеже. При покупке кондиционера получите самые выгодные цены, а так же год обслуживания и доставку бесплатно! Системы кондиционирования для любых задач от официального дилера</p>",
    link: "https://seltclimat.ru/",
    rate: "21",
  },
  {
    title: "Сэлт Воронеж",
    image: "./items/works/selt.png",
    brief: "Изготовление жалюзи всех видов в Воронеже",
    description:
      "<p>Все виды жалюзи в Воронеже по индивидуальным размерам. Более 750 тканей жалюзи и штор на выбор. Изготовление от 2 дня. Доставка и установка жалюзи по Воронежу и области от интерьерной студии СЭЛТ.</p>",
    link: "https://seltvrn.ru/",
    rate: "20",
  },
  {
    title: "Детский фестиваль искусств",
    image: "./items/works/happy_fest.png",
    brief:
      "Масштабный фестиваль для детей, подростков и взрослых в парке горького",
    description:
      "<p>Главный парк столицы превратится в игровую и образовательную площадку, объединяющую театр, цирк, науку, искусство, музыку и танец. Ждем всех желающих!</p>",
    link: "https://happy-fest.ru/",
    rate: "32",
    layout:
      "https://www.figma.com/design/JxAjhCjmn5F8MJUV8TdF1R/%C2%AB%D0%9D%D0%B5%D0%B1%D0%BE%C2%BB-%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9--%D1%84%D0%B5%D1%81%D1%82%D0%B8%D0%B2%D0%B0%D0%BB%D1%8C-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2?node-id=770-3937&node-type=canvas&t=mq9ioMWO0ipNjtjw-0",
  },
  {
    title: "Nera.digital",
    image: "./items/works/nera_digital.png",
    brief:
      "Улучшаем качество жизни через свои продукты, делая лучшее из возможного, по своим силам, погружаясь в рынок клиента.",
    description:
      "<p>Nero Digital - Агентство по дизайну и разработке цифровых продуктов, предлагающее услуги в области дизайна продуктов, разработки веб- и мобильных приложений, дизайна пользовательского интерфейса /UX и консалтинга в области цифровой трансформации.</p>",
    link: "https://nera.digital/",
    rate: "61",
    layout:
      "https://www.figma.com/design/XUY1PsKg8f2wnbpkqEfXsc/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0?node-id=0-1&node-type=canvas&t=LCRKPA41M2HKiutK-0",
  },
  {
    title: "Nera",
    image: "./items/works/nera.png",
    brief: "NERA помогает быстрее получить желаемое и достичь любых целей.",
    description:
      "<p>NERA помогает быстрее получить желаемое и достичь любых целей.</p> <p>Образовательные практики основаны на знаниях и опыте экспертов из разных областей: психологов, сертифицированных бизнес- тренеров, предпринимателей, HR - специалистов</p>",
    link: "https://nera.one/",
    rate: "62",
    layout:
      "https://www.figma.com/design/ux6HDM7zvlX9dMPq7aE3yu/Nera.One?node-id=0-1&node-type=canvas&t=xI0lPpuOaMJ8vZpD-0",
  },
  {
    title: "Nera Education",
    image: "./items/works/nera_edu.png",
    brief:
      "Персональный цифровой наставник, для самосовершенствования и построения личной стратегии жизни.",
    description:
      "<p>Мобильное приложение NERA определяет актуальный запрос именно для вас и предлагает персонализированный путь развития. Каждый день NERA, как настоящий цифровой наставник, помогает вам проходить короткие геймифицированные уроки и менять вашу жизнь к лучшему здесь и сейчас.</p> <p>С помощью миссий NERA можно по-новому взглянуть на свой потенциал и улучшить качество своей жизни.</p> <p>Бесплатное мобильное приложение NERA доступно в AppStore и GooglePlay.</p> <p>Проект реализуется при поддержке Президентского фонда культурных инициатив.</p>",
    link: "https://edu.nera.one/",
    rate: "60",
    layout:
      "https://www.figma.com/design/m6qYBUy06MzUZc6PYdpq7s/Nera-App-(shared)?t=XVrRzA9mLgimKMlx-0",
  },
  {
    title: "Воркшоп Цели и ценности",
    image: "./items/works/workshop.png",
    brief:
      "Ценности — основа целей, они помогают сохранять мотивацию и не идти за чужими мечтами.",
    description:
      "<p>Ценности — основа целей, они помогают сохранять мотивацию и не идти за чужими мечтами. Этот воркшоп поможет тебе осознать свои истинные ценности, синхронизировать свои цели и сформулировать план их достижения.</p>",
    link: "https://workshop.nera.one/",
    rate: "35",
    layout:
      "https://www.figma.com/design/lkv55HOCGtZt9rTQ4Qmyjv/%D0%A6%D0%B5%D0%BB%D0%B8-%D0%B8-%D1%86%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-(landing)?node-id=0-1&node-type=canvas&t=UITRi6ESAmEHCo9s-0",
  },
  {
    title: "Калькулятор вывесок",
    image: "./items/works/kalkulator.png",
    brief:
      "Калькулятор стоимости на Дизайн, производство, монтаж и согласование наружной рекламы, МАФ, входных групп.",
    link: "https://a1mgc.ru/kalkulyator",
    rate: "11",
  },
  {
    title: "Goal Bet",
    image: "./items/works/goal_bet.png",
    brief: "Бесплатные математические прогнозы на спорт",
    link: "https://goal-bet.ru/",
    rate: "10",
  },
  {
    title: "Достоевский",
    image: "./items/works/dostoevsky.png",
    brief:
      "Фестиваль-путешествие «Достоевский» — первое культурное событие, сомасштабное личности писателя.",
    description:
      "<p>Фестиваль-путешествие «Достоевский» — первое культурное событие, сомасштабное личности писателя. Он обозначит новую точку в топографии русской литературы. Современные форматы и жанры позволят взглянуть на Достоевского в новом ракурсе и сократить дистанцию между писателем и аудиторией.</p>",
    link: "https://dostoevskyfest.ru/",
    rate: "59",
    layout:
      "https://www.figma.com/design/8vnkRuJMcOKzkmzK0wHmw6/Dostoevsky?node-id=1-3174&node-type=canvas&t=RboVrdNR4l2OMdqj-0",
  },
  {
    title: "Экосистема Города",
    image: "./items/works/urbanecosystem.png",
    brief:
      "Первая всероссийская платформа развития территорий, работающая с задачами федерального значения. ",
    description:
      "<p>Платформа Urban Ecosystem – это бесплатная архитектурная лаборатория с доступным образовательным курсом и разработкой архитектурных концепций объектов для регионов РФ с последующей реализацией лучших проектов в срок до 5 лет</p> <p>Urban Ecosystem создает условия для конструктивного диалога между молодежным и ведущим профессиональным архитектурными сообществами, представителями органов власти регионов и бизнеса для развития территорий регионов РФ и повышения качества городской среды.Платформа представляет собой агрегатор заказов от регионов на современные архитектурные решения от молодых профессионалов.</p>",
    link: "https://urbanecosystem.ru/",
    rate: "57",
    layout:
      "https://www.figma.com/design/5lvcourDkbwEeaM3t2lrZ0/%D0%AD%D0%BA%D0%BE%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%22%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%22?node-id=0-1&node-type=canvas&t=EUqCb4yvterE1paj-0",
  },
  {
    title: "Миллениум для клиентов",
    image: "./items/works/millennium_client.png",
    brief:
      "Millennium - сервис организации командировок и деловых поездок в Москве и по всей России",
    description:
      "<p>Удобная организация командировок и деловых поездок на платформе «Millennium». Услуги организации деловых поездок сотрудников.</p> <p>Профессиональный сервис по организации командировок и MICE мероприятий.</p>",
    link: "https://millennium-dream.ru/",
    rate: "36",
    layout:
      "https://www.figma.com/design/w4K84IXLtPET02J2KOcSDV/Millennium-%3A%3A-CLIENT?t=nVo3pVXRW3MKx838-0",
  },
  {
    title: "Миллениум Администратор",
    image: "./items/works/millennium_admin.png",
    brief: "Современная online-платформа по управлению командировками и MICE",
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
    const itemsList = document.querySelector("[items-list]");

    const modalArea = document.querySelector(".modal-area");
    const modalDialog = document.createElement("div");

    modalDialog.classList.add("modal");
    modalDialog.classList.add("modal-work");
    modalDialog.setAttribute("data-lenis-prevent", "");
    modalArea.appendChild(modalDialog);

    //  sort items
    items.sort((a, b) => {
      var a1 = a.rate.toLowerCase();
      var b1 = b.rate.toLowerCase();
      return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
    });

    items.forEach((item, index) => {
      item.id = index + 1;
    });

    // foreach of items
    items.forEach((item) => {
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
                              }" data-modal-open="work-${item.id}">
                                <img data-src="${
                                  item.image
                                }" class="lazyload wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s" />
                              </div>
                            </div>
                            <div class="col-12">
                                <div class="card-body">
                                    <p class="wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                                        ${item.brief}
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
                                      ? `
                                    <div class="col-auto cursor-effect">
                                      <a href="${item.layout}" class="btn btn-purple btn-icon w-100" target="_blank" rel="noopener noreferrer">
                                        <i class="cl-icon-map2"></i>
                                        <span class="btn-icon-text">Макет</span>
                                      </a>
                                    </div>
                                  `
                                      : ""
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                `;

      itemsList.appendChild(colItem);
    });

    const covers = document.querySelectorAll(".card-image");

    covers.forEach((cover) => {
      cover.addEventListener("click", (e) => {
        const itemId = e.currentTarget.getAttribute("item-id");
        const modalId = `work-${itemId}`;
        modalDialog.setAttribute("data-modal-id", modalId);
        this.createModal(modalDialog, itemId);
        modalHelpers.show(modalDialog);
      });
    });
  }

  scrollEffect() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll("[items-list] .box").forEach((box, i) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          start: "top top",
          toggleActions: "restart pause reverse pause",
          scrub: i * 0.2,
        },
        opacity: 0,
        duration: 1,
      });
    });
  }

  createModal(modalDialog, itemId) {
    const item = items.find((item) => item.id === parseInt(itemId));
    modalDialog.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-btn-close cursor-effect ml-auto w-fit">
            <button type="button" class="btn btn-black btn-dimmed btn-colored btn-icon btn-icon-burger position-relative" btn-close-modal>
                <i class="cl-icon-cross"></i>
            </button>
          </div>

          <div class="modal-header">
            <h6 class="modal-title text-xs-left text-sm-center text-md-center">${
              item.title
            }</h6>
          </div>

          <div class="modal-body text-left">
            <div class="row g-3">
              <div class="col-12">
                <div class="modal-image rounded lazyload cursor-effect" data-expand="-10" item-id="${
                  item.id
                }" data-modal-open="work-${item.id}">
                  <img data-src="${item.image}" class="lazyload w-100" />
                </div>
              </div>
              <div class="col-12">
                <div class="card-body text-left">
                  <p>
                    ${item.description ? item.description : item.brief}
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
                        <a href="${item.link}" class="btn btn-black btn-icon w-100" target="_blank" rel="noopener noreferrer">
                          <i class="cl-icon-link"></i>
                        </a>
                      </div>
                    `
                        : ""
                    }
                    ${
                      item.layout
                        ? `
                      <div class="col-auto cursor-effect">
                        <a href="${item.layout}" class="btn btn-purple btn-icon w-100" target="_blank" rel="noopener noreferrer">
                          <i class="cl-icon-map2"></i>
                          <span class="btn-icon-text">Макет</span>
                        </a>
                      </div>
                    `
                        : ""
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

new Items();
