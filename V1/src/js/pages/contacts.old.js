import gsap from "gsap";
import Preloader from "../class/Preloader";

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
                    <a href="https://vk.com/kindsamurai_vk" target="_blank" class="btn btn-icon btn-white btn-colored cursor-effect fs-6" data-contact-button="">
                      <i class="cl-icon-vk"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="https://wa.me/79204079479" target="_blank" class="btn btn-icon btn-white btn-colored cursor-effect fs-6" data-contact-button="">
                      <i class="cl-icon-whatsapp"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="https://t.me/black_magic_101" target="_blank" class="btn btn-icon btn-white btn-colored cursor-effect fs-6" data-contact-button="">
                      <i class="cl-icon-telegram"></i>
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
      this.pulseButtons();
    }, preloader.options.duration + preloader.options.closing - preloader.options.remove);
  }

  pulseButtons() {
    document.querySelectorAll("[data-contact-button]").forEach((button) => {
      const hoverTl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.2,
          ease: "power2.inOut",
        },
      });

      hoverTl.to(button, {
        scale: 1.2,
      });

      hoverTl.reverse();

      button.addEventListener("mouseover", () => {
        hoverTl.play();
      });
      button.addEventListener("mouseout", () => {
        hoverTl.reverse();
      });
    });
  }
}

new Contacts();
