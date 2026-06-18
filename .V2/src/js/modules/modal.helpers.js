const modalHelpers = {
    scrollbarWidth() {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";

        // for win 8
        outer.style.msOverflowStyle = "scrollbar";

        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;

        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    },

    hideAll() {
        if ($("[data-modal-id].show").length > 0) {
            modalHelpers.hide($("[data-modal-id].show"));
        }
    },

    show(modal) {
        modalHelpers.hideAll();

        $("body").css("padding-right", modalHelpers.scrollbarWidth() + "px");
        $("body").addClass("modal-is-open");

        modal.addClass("show");
        modal.trigger("shown");
    },

    videoReplace(video) {
        let clone = video.clone();

        if (clone.hasClass('lazyloaded')) {
            clone.removeClass('lazyloaded');
            clone.attr('src', clone.attr('data-src'));
        }

        video.after(clone).remove();
    },

    hide(modal) {
        $("body").css("padding-right", 0);
        $("body").removeClass("modal-is-open");

        modal.removeClass("show");
        modal.trigger("hidden");

        modal.find('iframe, video').each(function () {
            modalHelpers.videoReplace($(this));
        });
    },
};

export default modalHelpers;
