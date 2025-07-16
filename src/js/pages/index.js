import items from "../../json/items/works.json";

class Main {
  constructor() {
    this.events();
    this.list;
  }

  events() {
    this.init();
  }

  init() {
    this.list = document.querySelector("[items-list]");

    if (this.list) {
      //  sort items
      items.sort((a, b) => {
        var a1 = a.rate.toLowerCase();
        var b1 = b.rate.toLowerCase();
        return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
      });

      items.forEach((item, index) => {
        item.id = index + 1;
      });

      const itemsToShow = items.slice(0, 5);

      // foreach of items
      itemsToShow.forEach((item) => {
        const colItem = document.createElement("div");
        colItem.className = "card card-work";
        colItem.innerHTML = `
                    <div class="card-content wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s">
                        <div class="row g-3">
                            <div class="col-12">
                              <h3 class="card-title">
                                ${item.title}
                              </h3>
                            </div>
                            <div class="col-12">
                              <div class="card-image rounded lazyload cursor-effect" data-expand="-10" item-id="${
                                item.id
                              }" data-modal-open="work-${item.id}">
                                <img data-src="${
                                  item.image
                                }" class="lazyload wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s" />
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
                                  ${
                                    item.link
                                      ? `
                                    <div class="col-auto cursor-effect">
                                      <a href="${item.link}" class="btn btn-blue btn-icon btn-sm w-100" target="_blank" rel="noopener noreferrer" title="Ссылка на источник">
                                        <i class="fa-solid fa-link"></i>
                                      </a>
                                    </div>
                                  `
                                      : ""
                                  }
                                  ${
                                    item.layout
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
                `;

        this.list.appendChild(colItem);
      });
    }
  }
}

new Main();
