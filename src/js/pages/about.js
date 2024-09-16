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
                        <span class="fs-6 wow bounceInUp">
                            Листай вниз <i class="cl-icon-arrow-down"></i>
                        </span>
                    </div>
                </div>
            </section>
            <section class="section section-content section-description">
                <div class="container">
                    <div class="circle"></div>
                    <div class="row g-3">
                        <div class="col-12 wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s">
                            <h1 class="h1 section-description-title text-center">Приветствую</h1>
                        </div>
                        <div class="col-12 wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                            <h2 class="h3 section-description-title text-center">Делаю сайты с душой <br class="d-inline d-lg-none">и любовью ❤️</h2>
                        </div>
                        <div class="col-12">
                            <p class="fs-5 section-description-text text-center wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                                В данной сфере работаю уже 4 года. За это время многому научился и добился успеха. В основе своей делаю лендинг-продукты, но и сложные сайты не брезгую. В любом случае, всегда стараюсь сделать сайт таким, чтобы он был удобен и понятен для пользователя.
                            </p>
                        </div>
                        <div class="col-12">
                            <p class="fs-5 section-description-text text-center wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                                Если нужна помощь - <span class="cursor-effect"><a href="./contacts" class="link" target="_blank">обращайтесь</a></span> 👍
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-content section-over">
                <div class="container">
                    <h3 class="h3 text-center opacity-75">
                        Спасибо за внимание!
                    </h3>
                </div>
            </div>
        </main>
      `;

    this.animateCircle();
  }

  animateCircle() {
    gsap.to(".circle", {
      width: "600vmax",
      height: "600vmax",

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
    const titleLines = document.querySelectorAll(".section-description-title");

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
    const textLines = document.querySelectorAll(".section-description-text");

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
  }
}

new About();
