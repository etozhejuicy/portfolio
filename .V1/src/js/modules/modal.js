import Lenis from "../class/Lenis";
import modalHelpers from "./modal.helpers";

$(document)
  .on('click', '[data-modal-open]', (e) => {
    Lenis.stop();
    modalHelpers.show($('[data-modal-id="' + $(e.currentTarget).attr('data-modal-open') + '"]'));
  })
  .on('click', '[btn-close-modal]', (e) => {
    Lenis.start();
    modalHelpers.hide($(e.currentTarget).parents('[data-modal-id]'));
  })
  .on("click", '.modal', (e) => {
    if (!$(e.target).closest(".modal-dialog>*").length) {
      if ($('[data-modal-id].show').length > 0) {
        Lenis.start();
        modalHelpers.hide($('[data-modal-id].show'));
      }
    }
  });

$.fn.extend({
  modal: function (action) {
    if (action == 'show') {
      Lenis.stop();
      modalHelpers.show($(this));
    } else if (action == 'hide') {
      Lenis.start();
      modalHelpers.hide($(this));
    }
  }
});