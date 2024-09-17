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
          <div class="row g-4 justify-content-center">
            <div class="col-12">
              <h3 class="h4 text-center">
                Свяжитесь со мной любым <br />
                удобным способом:
              </h3>
            </div>
            <div class="col-auto">
              <a href="https://vk.com/kindsamurai_vk" target="_blank" class="btn btn-icon btn-white btn-colored cursor-effect fs-6">
                <i class="cl-icon-vk"></i>
              </a>
            </div>
            <div class="col-auto">
              <a href="https://wa.me/79204079479" target="_blank" class="btn btn-icon btn-white btn-colored cursor-effect fs-6">
                <i class="cl-icon-whatsapp"></i>
              </a>
            </div>
            <div class="col-auto">
              <a href="https://t.me/black_magic_101" target="_blank" class="btn btn-icon btn-white btn-colored cursor-effect fs-6">
                <i class="cl-icon-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 d-none">
          <form id="contactForm" class="row g-3">
            <div class="col-12 col-md-6">
              <div class="form-label form-label-column form-relative">
                <label for="name">Ваше имя</label>
                <input name="name" type="text" class="form-control" rows="1" value="" id="name" placeholder="Иван Петров" required />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-label form-label-column form-relative">
                <label for="email">Почта для связи</label>
                <input name="email" type="text" class="form-control" rows="1" value="" id="email" placeholder="example@mail.ru" required />
              </div>
            </div>
            <div class="col-12">
              <div class="form-label form-label-column form-relative">
                  <label for="message">Ваше сообщение</label>
                  <textarea name="message" type="text" class="form-control" data-autosize="true" style="flex:unset;resize:none;" rows="4" value="" id="message" placeholder="Введите текст" required></textarea>
              </div>
            </div>
            <div class="col-12 col-md-4 offset-md-8">
              <button type="submit" class="btn btn-white btn-colored w-100">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
      `;
  }
}

new Contacts();
