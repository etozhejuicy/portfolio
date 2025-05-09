import LenisScroll from "../class/Lenis";

const loader = document.createElement("div");

class Preloader {
  constructor() {
    this.options = {
      init: true,
      duration: 1500,
      closing: 1000,
      remove: 500,
      infinite: false,
      finish: false,
      activeClass: "preloader-active",
      hiddenClass: "preloader-hidden",
    };
    this.events();
  }

  events() {
    LenisScroll.lenis.stop();
    window.addEventListener("DOMContentLoaded", () => {
      this.init();
    });
  }

  updateFinishState(finish) {
    this.options = { ...this.options, finish };
    this.updateAnimationState();
  }

  updateAnimationState() {
    // console.log("updateAnimationState method is being executed");
  }

  isFinished() {
    return this.options.finish;
  }

  getOptions() {
    return this.options;
  }

  init() {
    if (this.options.init) {
      let main = document.querySelector("main");

      loader.classList.add("preloader");
      loader.innerHTML = `
            <div class="preloader-container">
                <div class="preloader-spinner"></div>
            </div>
        `;

      main.parentElement.prepend(loader);
      this.animatedList();
    } else {
      $("html").css("display", "block");
    }
  }

  animatedList() {
    $("html").css("display", "block");
    $("body").removeClass("preloader-init");
    $("body").addClass(this.options.activeClass);

    if (this.options.infinite == false) {
      setTimeout(() => {
        this.closing();
      }, this.options.duration);
    }
  }

  closing() {
    $(".preloader").css("transform", "scale(0)");
    $("body").removeClass(this.options.activeClass);
    $("body").addClass(this.options.hiddenClass);
    this.destroy();
  }

  destroy() {
    setTimeout(() => {
      $("body").removeClass(this.options.hiddenClass);
      LenisScroll.lenis.start();
      this.updateFinishState(true);

      setTimeout(() => {
        loader.remove();
      }, this.options.remove);
    }, this.options.closing);
  }
}

export default Preloader;
