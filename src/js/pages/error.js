// styles
import "../../scss/pages/error.scss";

class Error {
  constructor() {
    this.events();
  }

  events() {
    this.init();
  }

  init() {
    document.querySelector("#app").innerHTML = `
      <main class="content">
        <section class="section section-content section-hero">
          <div class="container">
            <div class="row g-5">
              <div class="col-12">
                  <div class="text-center">
                      <h1 class="h2 fw-700 text-white wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s" id="typing-text">
                          Web Development
                      </h1>
                  </div>
              </div>
              <div class="col-12">
                  <div class="text-center">
                      <p class="fs-6 text-white wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                          Делаю проекты с душой и любовью ❤️
                      </p>
                  </div>
              </div>
              <div class="col-12">
                <div class="d-flex justify-content-center wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                      <span class="cursor-effect">
                        <a href="./works" class="btn btn-lg btn-icon btn-white w-100 w-xs-100 w-sm-100 w-md-auto">
                            <i class="cl-icon-folder"></i>
                            <span class="btn-icon-text">Смотреть работы</span>
                        </a>
                      </span>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }
}

new Error();
