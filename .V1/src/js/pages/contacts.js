import gsap from "gsap";
import Preloader from "../class/Preloader";

import "../components/feedback";

// styles
import "../../scss/pages/contacts.scss";

class Contacts {
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
                <div class="card" card-form="">
                  <div class="card-content">
                    <div class="card-header">
                      <div class="card-title">
                        Свяжитесь со мной через <br />
                        форму обратной связи:
                      </div>
                    </div>
                    <div class="card-body">
                      <form id="my-form" action="https://formspree.io/f/xzzplabv" method="POST" class="row g-3">
                        <div class="col-12" id="my-form-status">
                          <div class="badge badge-danger badge-colored"></div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-label form-label-column form-relative cursor-effect">
                            <label for="name" class="text-black">Ваше имя</label>
                            <input name="name" type="text" class="form-control" rows="1" value="" id="name" placeholder="Иван Петров" required />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-label form-label-column form-relative cursor-effect">
                            <label for="email" class="text-black">Почта для связи</label>
                            <input name="email" type="text" class="form-control" rows="1" value="" id="email" placeholder="example@mail.ru" required />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-label form-label-column form-relative cursor-effect">
                              <label for="message" class="text-black">Ваше сообщение</label>
                              <textarea name="message" type="text" class="form-control" data-autosize="true" style="flex:unset;resize:none;" rows="4" value="" id="message" placeholder="Введите текст" required></textarea>
                          </div>
                        </div>
                        <div class="col-12 col-md-4 offset-md-8">
                          <button type="submit" class="btn btn-purple btn-colored btn-dimmed w-100 cursor-effect">
                            Отправить
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="text-center fs-5 text-white">
                  или в социальных сетях:
                </div>
              </div>
              <div class="col-12">
                <div class="row g-3 justify-content-center">
                  <div class="col-auto">
                    <a href="https://vk.com/kindsamurai_vk" target="_blank" class="btn btn-icon btn-vk btn-voluminous cursor-effect" data-contact-button="">
                      <i class="cl-icon-vk"></i>
                      <span class="btn-icon-text">
                        ВКонтакте
                      </span>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="https://t.me/black_magic_101" target="_blank" class="btn btn-icon btn-blue btn-voluminous cursor-effect" data-contact-button="">
                      <i class="cl-icon-telegram"></i>
                      <span class="btn-icon-text">
                        Telegram
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      `;

    this.afterPreloader();
  }

  afterPreloader() {
    let preloader = new Preloader();

    setTimeout(() => {
      this.formShow();
    }, preloader.options.duration + preloader.options.closing - preloader.options.remove);
  }

  formShow() {
    let card = document.querySelector("[card-form]");

    let cardAnim = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "back",
      },
    });

    cardAnim.fromTo(
      card,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }
}

new Contacts();
