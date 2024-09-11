import gsap from "gsap";
import "../../scss/pages/index.scss";

class Main {
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
                      <h1 class="h1 fw-700 text-white wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s" id="typing-text">
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

    setTimeout(() => {
      this.printableText();
    }, 1500);
  }

  printableText() {
    // Get the target element
    const typingText = document.getElementById("typing-text");

    // Text content for typing animation
    const textContent = "Web Development";

    // Split the text content into an array of characters
    const chars = textContent.split("");

    // Clear the existing content of the target element
    typingText.innerHTML = "";

    // Loop through each character and create the animation
    chars.forEach((char, index) => {
      // Create a new span element for the character
      const charSpan = document.createElement("span");
      charSpan.textContent = char;

      // Apply initial opacity of 0
      charSpan.style.opacity = 0;

      // Append the span to the target element
      typingText.appendChild(charSpan);

      // Create the typing animation using GSAP

      gsap.to(charSpan, {
        opacity: 1,
        delay: index * 0.35,
        duration: 0.4,
        ease: "power3.in(1)"
      });
    });
  }
}

new Main();