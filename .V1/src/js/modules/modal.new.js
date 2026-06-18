import modalHelpers from "./modal.helpers";

class Modal {
  constructor() {
    this.mouseDown = false;
    this.startPos = null;

    modalHelpers.scrollbarWidth();
    this.events();
  }

  events() {
    modalHelpers.scrollbarWidth();

    $(document)
      .on("click", '[data-modal-open]', (e) => {
        modalHelpers.scrollbarWidth();
        this.open(e);
      })
      .on("click", '[btn-close-modal]', (e) => {
        modalHelpers.scrollbarWidth();
        this.close(e);
      })
      .on("mousedown touchstart", ".modal-dialog", (e) => {
        this.mouseDown = true;
      })
      .on("click", ".modal", (e) => {
        if (!$(e.target).closest(".modal-dialog>*").length) {
          if ($("[data-modal-id].show").length > 0) {
            modalHelpers.hide($("[data-modal-id].show"));
          }
        }
      })
      .on("mouseup touchend", ".modal-dialog", (e) => {
        this.mouseDown = false;
        this.startPos = null;
        if ($(e.currentTarget).parents(".modal").hasClass("show")) {
          $(e.currentTarget).css("--modal-translate", 0 + "%");
          setTimeout(() => {
            $(e.currentTarget)
              .parents(".modal")
              .removeClass("modal-translating");
          }, 250);
        } else {
          $(e.currentTarget).css("--modal-translate", 100 + "%");
        }
      })
      .on("mousemove touchmove", ".modal-dialog", (e) => {
        let modalHeight = $(e.currentTarget).height();

        if (this.mouseDown == true) {
          const pos = this.getPos(e);
          if (this.startPos == null) {
            this.startPos = pos.y;
          } else {
            const distancePx = pos.y - this.startPos;
            const distancePercent = 100 / (modalHeight / distancePx);

            if (pos.y > this.startPos) {
              if (distancePercent > 60) {
                modalHelpers.scrollbarWidth();
                this.close(e);
              } else {
                $(e.currentTarget)
                  .parents(".modal")
                  .addClass("modal-translating");
                $(e.currentTarget).css(
                  "--modal-translate",
                  distancePercent + "%"
                );
              }
            }
          }
        }
      });
  }

  open(e) {
    $(e.currentTarget).parents().find(".modal").removeClass("show");
    let modalName = $(e.currentTarget).attr("data-modal-open");

    modalHelpers.show($('[data-modal-id="' + modalName + '"]'));
  }

  close(e) {
    modalHelpers.hide($(e.currentTarget).parents().find(".modal"));
  }

  getPos(e) {
    let x, y;
    if (
      e.type == "touchstart" ||
      e.type == "touchmove" ||
      e.type == "touchend" ||
      e.type == "touchcancel"
    ) {
      var touch =
        e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else if (
      e.type == "mousedown" ||
      e.type == "mouseup" ||
      e.type == "mousemove" ||
      e.type == "mouseover" ||
      e.type == "mouseout" ||
      e.type == "mouseenter" ||
      e.type == "mouseleave"
    ) {
      x = e.clientX;
      y = e.clientY;
    }

    return { x: x, y: y };
  }
}

new Modal();

// bootstrap api
$.fn.extend({
  modal: function (action) {
    if (action == 'show') {
      modalHelpers.show($(this));
    } else if (action == 'hide') {
      modalHelpers.hide($(this));
    }
  }
});
