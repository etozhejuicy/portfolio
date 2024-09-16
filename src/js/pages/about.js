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

        document.querySelector("#app").innerHTML = `
        <main class="content">
            <section class="section section-content section-hero">
                <div class="container">
                    <div class="section-hero-logo">
                        <div class="big">
                            <img data-src="` + logo + `" class="lazyload" />
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
                            <h1 class="h1 section-hero-text text-center">Приветствую</h1>
                        </div>
                        <div class="col-12 wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                            <h2 class="h3 section-hero-text text-center">Делаю сайты с душой <br class="d-inline d-lg-none">и любовью ❤️</h2>
                        </div>
                        <div class="col-12">
                            <p class="fs-5 text-center wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
                                В данной сфере работаю уже 4 года. За это время многому научился и добился успеха. В основе своей делаю лендинг-продукты, но и сложные сайты не брезгую. В любом случае, всегда стараюсь сделать сайт таким, чтобы он был удобен и понятен для пользователя.
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
            }
        });

        const textLines = document.querySelectorAll(".section-description-text");

        const textLineAnim = gsap.timeline({

            defaults: {
                duration: 1,
                ease: 'none'
            },
            scrollTrigger: {
                start: 0,
                end: 'max',
                scrub: 0.5
            }

        });

        textLineAnim
            .fromTo(textLines, {
                x: (index, target) => index % 2 ? window.innerWidth : -window.innerWidth
            }, {
                x: 0
            }, 0)
            .fromTo(textLines, {
                x: 0
            }, {
                x: (index, target) => index % 2 ? -window.innerWidth : window.innerWidth,
                immediateRender: false
            }, 2);
    }
}

new About();