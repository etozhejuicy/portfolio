import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import logo from "/logo.svg";

import "../../scss/pages/about.scss";

class About {
  constructor() {
    this.events();
  }

  events() {
    this.init();
  }

  init() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelector("#app").innerHTML =
      `
        <main class="content">
            <section class="section section-content section-hero">
                <div class="container">
                    <div class="section-hero-logo">
                        <div class="big">
                            <img data-src="` +
      logo +
      `" class="lazyload" />
                        </div>
                    </div>
                    <div class="section-hero-tip opacity-75">
                        <div class=" wow bounce" data-wow-duration="1s" data-wow-offset="0" data-wow-delay="1s" data-wow-iteration="infinite">
                          <span class="fs-6">
                              Листай вниз <i class="cl-icon-arrow-down"></i>
                          </span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-content section-description">
                <div class="container">
                    <div class="circle"></div>
                    <div class="row g-3">
                        <div class="col-12" title-lines-animation="">
                            <h1 class="h1 section-description-title text-center">Приветствую</h1>
                        </div>
                        <div class="col-12" title-lines-animation="">
                            <h2 class="h3 section-description-title text-center">Делаю сайты с душой <br class="d-inline d-lg-none">и любовью ❤️</h2>
                        </div>
                        <div class="col-12">
                            <p class="fs-5 section-description-text text-center" text-lines-animation="">
                                В данной сфере работаю уже 4 года. <br class="d-inline d-md-none">За это время многому <br class="d-none d-md-inline">научился <br class="d-inline d-md-none">и добился успеха. В основе своей <br class="d-inline d-md-none">делаю лендинг-продукты, <br class="d-none d-md-inline">но <br class="d-inline d-md-none">и сложные сайты не брезгую. <br class="d-inline d-md-none">В любом случае, всегда <br class="d-none d-md-inline">стараюсь <br class="d-inline d-md-none">сделать сайт таким, чтобы он был <br>удобен и понятен для пользователя.
                            </p>
                        </div>
                        <div class="col-12">
                            <p class="fs-5 section-description-text text-center" text-lines-animation="">
                                Если нужна помощь в веб-разработке, <br>консультация или полноценная <br class="d-inline d-md-none">разработка - <span class="cursor-effect"><a href="./contacts" class="link" target="_blank">обращайтесь</a></span> 👍
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-content section-over">
                <div class="container">
                    <div class="section-over-content">
                      <h3 class="h3 text-center" over-lines-animation="">
                        Спасибо за внимание!
                      </h3>
                    </div>
                </div>
            </section>
        </main>
      `;

    this.animateCircle();
  }

  animateCircle() {
    gsap.to(".circle", {
      width: "600vmax",
      height: "600vmax",
      duration: 2,
      scrollTrigger: {
        // pin: true,
        trigger: ".section-description",
        start: "top 100%",
        end: "bottom top",
        scrub: 0.5,
        // markers: true
      },
    });

    // titles animation
    const titleLines = document.querySelectorAll("[title-lines-animation]");

    const titleLineAnim = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "none",
      },
      scrollTrigger: {
        start: "top center",
        end: "75% 100%",
        scrub: 0.5,
        // markers: true,
      },
    });

    titleLineAnim.fromTo(
      titleLines,
      {
        x: (index, target) =>
          index % 2 ? window.innerWidth : -window.innerWidth,
        immediateRender: false,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      },
      2
    );

    // text animation
    const textLines = document.querySelectorAll("[text-lines-animation]");

    const textLineAnim = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.in",
      },
      scrollTrigger: {
        start: "top center",
        end: "75% 100%",
        scrub: 0.5,
        // markers: true,
      },
    });

    textLineAnim.fromTo(
      textLines,
      {
        opacity: 0,
        zIndex: -1,
      },
      {
        opacity: 1,
        zIndex: 1,
      },
      2
    );

    // over text animation
    const overLines = document.querySelectorAll("[over-lines-animation]");

    const overLineAnim = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "back",
      },
      scrollTrigger: {
        trigger: ".section-over",
        start: "top bottom",
        end: "bottom 100%",
        scrub: 0.5,
        // markers: true,
      },
    });

    overLineAnim.fromTo(
      overLines,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
    );
  }
}

new About();
