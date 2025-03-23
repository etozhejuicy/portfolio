// vendor libs
import Swiper from "swiper/bundle";

// vendor styles
import "../../../../node_modules/swiper/swiper.css";

// custom libs
import modalHelpers from "../../modules/modal.helpers";
import items from "../../../json/items/works.json";

class Items {
  constructor() {
    window.addEventListener("load", () => {
      this.events();
    });
  }

  events() {
    const itemsList = document.querySelector("[items-list]");

    const modalArea = document.querySelector(".modal-area");
    const modalDialog = document.createElement("div");

    modalDialog.classList.add("modal");
    modalDialog.classList.add("modal-work");
    modalDialog.setAttribute("data-lenis-prevent", "");
    modalArea.appendChild(modalDialog);

    //  sort items
    items.sort((a, b) => {
      var a1 = a.rate.toLowerCase();
      var b1 = b.rate.toLowerCase();
      return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
    });

    items.forEach((item, index) => {
      item.id = index + 1;
    });

    // foreach of items
    items.forEach((item) => {
      const colItem = document.createElement("div");
      colItem.className = "col-12 col-md-6 col-lg-4 box";
      colItem.innerHTML = `
                  <div class="card card-work">
                    <div class="card-content wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s">
                        <div class="row g-3">
                            <div class="col-12">
                              <h3 class="card-title">
                                ${item.title}
                              </h3>
                            </div>
                            <div class="col-12">
                              <div class="card-image rounded lazyload cursor-effect" data-expand="-10" item-id="${item.id}" data-modal-open="work-${item.id}">
                                <img data-src="${item.image}" class="lazyload wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s" />
                              </div>
                            </div>
                            <div class="col-12">
                                <div class="card-body">
                                    <p class="wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                                        ${item.brief}
                                    </p>
                                </div>
                            </div>
                            <div class="col-12">
                              <div class="card-footer">
                                <div class="row g-2">
                                  ${item.link
          ? `
                                    <div class="col-auto cursor-effect">
                                      <a href="${item.link}" class="btn btn-blue btn-icon btn-sm w-100" target="_blank" rel="noopener noreferrer" title="Ссылка на источник">
                                        <i class="fa-solid fa-link"></i>
                                      </a>
                                    </div>
                                  `
          : ""
        }
                                  ${item.layout
          ? `
                                    <div class="col-auto cursor-effect">
                                      <a href="${item.layout}" class="btn btn-purple btn-icon btn-sm w-100" target="_blank" rel="noopener noreferrer" title="Ссылка на макет">
                                        <i class="fa-brands fa-figma"></i>
                                      </a>
                                    </div>
                                  `
          : ""
        }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                `;

      itemsList.appendChild(colItem);
    });

    const covers = document.querySelectorAll("[data-modal-open]");

    covers.forEach((cover) => {
      cover.addEventListener("click", (e) => {
        const itemId = e.currentTarget.getAttribute("item-id");
        const modalId = `work-${itemId}`;
        modalDialog.setAttribute("data-modal-id", modalId);
        this.createModal(modalDialog, itemId);
        modalHelpers.show(modalDialog);
      });
    });
  }

  createModal(modalDialog, itemId) {
    const item = items.find((item) => item.id === parseInt(itemId));

    modalDialog.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-btn-close cursor-effect ml-auto w-fit">
            <button type="button" class="btn btn-white btn-sm btn-dimmed btn-colored btn-icon btn-icon-burger position-relative fs-5" btn-close-modal>
                <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="modal-header">
            <h5 class="modal-title text-xs-left text-sm-center text-md-center">${item.title
      }</h5>
          </div>

          <div class="modal-body text-left">
            <div class="row g-3">
              <div class="col-12">
                <div class="modal-image rounded lazyload" data-expand="-10" item-id="${item.id
      }" >
                ${item.gallery
        ? `
                    <div class="swiper-container swiper-gallery w-100 h-100">
                      <div class="swiper-wrapper">
                      ${item.gallery.map((picture, index) => {
          return `
                        <div class="swiper-slide">
                          <img data-src="${picture}" class="lazyload w-100" />
                        </div>
                        `;
        }).join("")}
                      </div>
                      <div class="swiper-pagination w-fit mx-auto bg-white text-black fs-3 fw-500 opacity-50 py-0 px-2 rounded-pill" style="left:50%; transform: translate3d(-50%, 0, 0);"></div>
                      <div class="btn btn-sm btn-white btn-icon swiper-button-next" style="min-width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);--swiper-navigation-color: var(--cl-btn-color);">
                          <i class="fa-solid fa-arrow-right"></i>
                      </div>
                      <div class="btn btn-sm btn-white btn-icon swiper-button-prev" style="min-width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);--swiper-navigation-color: var(--cl-btn-color);">
                          <i class="fa-solid fa-arrow-left"></i>
                      </div>
                    </div>
                  ` : `
                    <img data-src="${item.image}" class="lazyload w-100" />
                  `}
                </div>
              </div>
              <div class="col-12">
                <div class="card-body text-left">
                  <p>
                    ${item.description ? item.description : item.brief}
                  </p>
                </div>
              </div>
              <div class="col-12">
                <div class="card-footer">
                  <div class="row g-2">
                    ${item.link
        ? `
                      <div class="col-auto cursor-effect">
                        <a href="${item.link}" class="btn btn-blue btn-icon btn-sm w-100" target="_blank" rel="noopener noreferrer" title="Ссылка на источник">
                          <i class="fa-solid fa-link"></i>
                          <span class="btn-icon-text">Источник</span>
                        </a>
                      </div>
                    `
        : ""
      }
                    ${item.layout
        ? `
                      <div class="col-auto cursor-effect">
                        <a href="${item.layout}" class="btn btn-purple btn-icon btn-sm w-100" target="_blank" rel="noopener noreferrer" title="Ссылка на макет">
                          <i class="fa-brands fa-figma"></i>
                          <span class="btn-icon-text">Макет</span>
                        </a>
                      </div>
                    `
        : ""
      }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.swipers();
  }

  swipers() {
    if ($(".swiper-gallery").length) {
      var swiperGallery = new Swiper(".swiper-gallery", {
        slidesPerView: 1,
        spaceBetween: 20,
        height: 100,
        scrollbar: {
          enabled: true,
          el: ".swiper-scrollbar",
          draggable: true,
          dragSize: "auto",
          hide: false,
          snapOnRelease: true,
        },
        pagination: {
          enabled: true,
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        allowTouchMove: true,
        grabCursor: true,
      });
      setTimeout(function () {
        if (swiperGallery.update) {
          swiperGallery.update();
        }
      }, 500);
    }
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}

new Items();