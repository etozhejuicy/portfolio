// routes
import routes from "../class/routes";

import logo from "/logo.svg";

class Main {
  constructor() {
    this.events();
  }

  events() {
    this.init();
  }

  init() {
    document.querySelector("#app").innerHTML = `
      <main class="content">
        <section class="section section-hero">
          <div class="container">
            <h1 class="fw-700 text-black wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s" id="typing-text">
                    Cоздание
                    и&nbsp;продвижение
                    креативных сайтов
            </h1>
            <h2 class="fs-6 wow text-black fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                Делаю проекты с душой и&nbsp;любовью <i class="fa-solid fa-heart text-red"></i>
            </h2>
            <div class="section-hero--actions">
              <a href="${routes.urls['works']}" class="btn btn-lg btn-icon wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                <i class="fa-solid fa-briefcase"></i>
                <span class="btn-icon-text">Все работы</span>
              </a>
              <a href="${routes.urls['contacts']}" class="btn btn-lg btn-icon wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                <i class="fa-solid fa-comment"></i>
                <span class="btn-icon-text">Написать мне</span>
              </a>
            </div>
            <div class="section-hero--logo">
              <img data-src="${logo}" class="lazyload" />
            </div>
          </div>
        </section>
      </main>
    `;

  }
}

new Main();