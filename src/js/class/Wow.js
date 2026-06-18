class Wow {
  constructor() {
    this.options = {
      selector: ".wow",
      duration: 0.25,
      delay: 0,
      effect: "fadeIn",
    };
    this.objects = document.querySelectorAll(this.options.selector);
    this.events();
  }

  events() {
    if (!this.objects) return;

    this.objects.forEach((el) => {
      el.style.opacity = "0";
    });

    window.addEventListener("load", this.init());
    window.addEventListener("scroll", this.init());
    window.addEventListener("resize", this.init());

    // console.log(Array.from(this.objects).map((o) => o.style.opacity))
  }

  init() {
    this.objects.forEach((el) => {
        console.log(this.objects)
      if (this.isElementInViewport(el)) {
        this.options.duration =
          el.getAttribute("data-anim-duration") || this.options.duration;
        this.options.delay = el.getAttribute("data-anim-delay") || this.options.delay;
        this.options.effect =
          el.getAttribute("data-anim-effect") || this.options.effect;

          console.log(this.options.delay, this.options.duration, this.options.effect, this.options.selector)

        el.style.animation = "none";
        el.style.transition = "none";

        if (this.options.effect === "fadeIn") {
          el.style.opacity = "1";
          el.style.transition = `${this.options.duration}s ease ${this.options.delay}s`;
        } else {
          el.style.animation = `${this.options.effect}s ${this.options.duration} ease ${this.options.delay}s forwards`;
        }

        setTimeout(() => {
          el.style.transition = "";
        }, this.options.duration + this.options.delay);
      } else {
        el.style.opacity = "0";
        el.style.animation = "none";
        el.style.transition = "";
      }
    });
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
}

export default new Wow();
