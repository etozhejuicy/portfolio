// styles
import "../../scss/pages/contacts.scss";

import "../components/contactForm";

document.querySelector("#app").innerHTML = `
<main class="content">
  <section class="section section-content section-hero">
    <div class="container">
      <form id="contactForm" class="row g-3">
        <div class="col-12 col-md-6">
          <div class="form-label form-label-column form-relative">
            <label for="name">Ваше имя</label>
            <input name="name" type="text" class="form-control" rows="1" value="" id="name" placeholder="Иван Петров" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-label form-label-column form-relative">
            <label for="email">Почта для связи</label>
            <input name="email" type="text" class="form-control" rows="1" value="" id="email" placeholder="example@mail.ru" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-label form-label-column form-relative">
              <label for="message">Ваше сообщение</label>
              <textarea name="message" type="text" class="form-control" data-autosize="true" style="flex:unset;resize:none;" rows="4" value="" id="message" placeholder="Введите текст"></textarea>
          </div>
        </div>
        <div class="col-12 col-md-4 offset-md-8">
          <button type="submit" class="btn btn-white btn-colored w-100">
            Отправить
          </button>
        </div>
      </form>
    </div>
  </section>
</main>
`;
