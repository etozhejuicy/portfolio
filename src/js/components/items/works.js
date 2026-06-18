import charts from "../../../json/items/works.json";

class Items {
  constructor(limit = null) {
    this.limit = limit;
    this.events();
    this.list;
    this.items;
    this.elems = [];
  }

  events() {
    this.init();
  }

  init() {
    this.list = document?.querySelector("[items-list]");

    if (!this.list) return;

    this.items = charts;

    //  sort items
    this.items.sort((a, b) => {
      var a1 = a.rate.toLowerCase();
      var b1 = b.rate.toLowerCase();
      return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
    });

    charts.forEach((item, index) => {
      item.id = index + 1;
    });

    this.elems = charts;

    this.elems = this.limit ? charts.slice(0, this.limit) : charts;

    // foreach of items
    this.elems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card card-work";

      this.template = `
                    <div class="card-content wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0s">
                        <h3 class="card-title">
                          ${item.title}
                        </h3>

                        <div class="card-image rounded lazyload cursor-effect" data-expand="-10" item-id="${
                          item.id
                        }" data-modal-open="work-${item.id}">
                          <img data-src="${
                            item.image
                          }" class="lazyload wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s" />
                        </div>

                        <div class="card-body">
                            <p class="wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.25s">
                                ${item.brief}
                            </p>

                            ${
                              item.type
                                ? `<div class="badge badge-yellow fs-5 mt-10">${item.category}</div>`
                                : ""
                            }

                            ${
                              item.stacks
                                ? `<div class="d-flex mt-auto">` + item.stacks
                                    .map((stack) => {
                                      return `
                                            <div class="badge badge-red fs-5">${stack}</div>
                                            `;
                                    })
                                    .join("")
                                    + `</div>`
                                : ""
                            }
                        </div>

                        <div class="card-footer">
                          ${
                            item.link
                              ? `
                              <a href="${item.link}" class="btn btn-blue btn-icon btn-sm w-100" target="_blank" rel="noopener noreferrer" title="Ссылка на источник">
                                <i class="fa-solid fa-link"></i>
                              </a>
                              `
                              : ""
                          }
                                                    ${
                                                      item.layout
                                                        ? `
                              <a href="${item.layout}" class="btn btn-purple btn-icon btn-sm w-100" target="_blank" rel="noopener noreferrer" title="Ссылка на макет">
                                <i class="fa-brands fa-figma"></i>
                              </a>
                              `
                                                        : ""
                                                    }
                        </div>
                    </div>
                `;

      console.log(Array.from(item.stacks));

      card.innerHTML = this.template;

      this.list.appendChild(card);
    });
  }
}

export default Items;
