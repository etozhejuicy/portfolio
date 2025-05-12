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
        <section class="section section-content">
          <div class="container">
            <div class="card card-hero bg-danger">
                <h1 class="fw-700 text-black wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s" id="typing-text">
                    Cоздание
                    и&nbsp;продвижение
                    креативных сайтов
                </h1>
                <h2 class="fs-6 wow text-black fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                    Делаю проекты с душой и&nbsp;любовью <i class="fa-solid fa-heart text-warning"></i>
                </h2>
                <div class="card-hero-actions">
                  <a href="${routes.urls['works']}" class="btn btn-xl btn-icon btn-black btn-colored btn-voluminous w-100 w-xs-100 w-sm-100 w-md-fit wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                    <i class="fa-solid fa-briefcase"></i>
                    <span class="btn-icon-text">Смотреть работы</span>
                  </a>
                  <a href="${routes.urls['contacts']}" class="btn btn-xl btn-icon btn-outline-black btn-colored btn-voluminous w-100 w-xs-100 w-sm-100 w-md-fit wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                    <i class="fa-solid fa-comment"></i>
                    <span class="btn-icon-text">Связаться со мной</span>
                  </a>
                </div>
                <div class="card-hero-logo">
                                        <div class="big">
                                            <img data-src="` +
      logo +
      `" class="lazyload" />
                                        </div>
                                    </div>
            </div>
          </div>
        </section>
      </main>
    `;

  }
}

new Main();