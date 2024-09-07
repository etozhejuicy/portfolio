import {
  require_lazysizes
} from "./chunk-S57HYRBL.js";
import {
  __commonJS
} from "./chunk-JVWSFFO4.js";

// node_modules/lazysizes/plugins/blur-up/ls.blur-up.js
var require_ls_blur_up = __commonJS({
  "node_modules/lazysizes/plugins/blur-up/ls.blur-up.js"(exports, module) {
    (function(window2, factory) {
      if (!window2) {
        return;
      }
      var globalInstall = function() {
        factory(window2.lazySizes);
        window2.removeEventListener("lazyunveilread", globalInstall, true);
      };
      factory = factory.bind(null, window2, window2.document);
      if (typeof module == "object" && module.exports) {
        factory(require_lazysizes());
      } else if (typeof define == "function" && define.amd) {
        define(["lazysizes"], factory);
      } else if (window2.lazySizes) {
        globalInstall();
      } else {
        window2.addEventListener("lazyunveilread", globalInstall, true);
      }
    })(typeof window != "undefined" ? window : 0, function(window2, document, lazySizes) {
      "use strict";
      var lazySizesCfg;
      (function() {
        var prop;
        var blurUpDefaults = {
          blurUpClass: "ls-blur-up-img",
          blurUpLoadingClass: "ls-blur-up-is-loading",
          blurUpInviewClass: "ls-inview",
          blurUpLoadedClass: "ls-blur-up-loaded",
          blurUpLoadedOriginalClass: "ls-original-loaded"
        };
        lazySizesCfg = lazySizes.cfg || {};
        for (prop in blurUpDefaults) {
          if (!(prop in lazySizesCfg)) {
            lazySizesCfg[prop] = blurUpDefaults[prop];
          }
        }
      })();
      var slice = [].slice;
      var regBlurUp = /blur-up["']*\s*:\s*["']*(always|auto)/;
      var regType = /image\/(jpeg|png|gif|svg\+xml)/;
      var transSrc = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      var matchesMedia = function(source) {
        var media = source.getAttribute("data-media") || source.getAttribute("media");
        var type = source.getAttribute("type");
        return (!type || regType.test(type)) && (!media || window2.matchMedia(lazySizes.cfg.customMedia[media] || media).matches);
      };
      var getLowSrc = function(picture, img) {
        var matchingLowSrc;
        var sources = picture ? slice.call(picture.querySelectorAll("source, img")) : [img];
        sources.forEach(function(src) {
          if (matchingLowSrc) {
            return;
          }
          var lowSrc = src.getAttribute("data-lowsrc");
          if (lowSrc && matchesMedia(src)) {
            matchingLowSrc = lowSrc;
          }
        });
        return matchingLowSrc;
      };
      var createBlurup = function(picture, img, src, blurUp) {
        var blurImg;
        var isBlurUpLoaded = false;
        var isForced = false;
        var start = blurUp == "always" ? 0 : Date.now();
        var isState = 0;
        var parent = (picture || img).parentNode;
        var createBlurUpImg = function() {
          if (!src) {
            return;
          }
          var onloadBlurUp = function(e) {
            isBlurUpLoaded = true;
            if (!blurImg) {
              blurImg = e.target;
            }
            lazySizes.rAF(function() {
              lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
              if (blurImg) {
                lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedClass);
              }
            });
            if (blurImg) {
              blurImg.removeEventListener("load", onloadBlurUp);
              blurImg.removeEventListener("error", onloadBlurUp);
            }
          };
          blurImg = document.createElement("img");
          blurImg.addEventListener("load", onloadBlurUp);
          blurImg.addEventListener("error", onloadBlurUp);
          blurImg.className = lazySizes.cfg.blurUpClass;
          blurImg.cssText = img.cssText;
          blurImg.src = src;
          blurImg.alt = "";
          blurImg.setAttribute("aria-hidden", "true");
          parent.insertBefore(blurImg, (picture || img).nextSibling);
          if (blurUp != "always") {
            blurImg.style.visibility = "hidden";
            lazySizes.rAF(function() {
              if (blurImg) {
                setTimeout(function() {
                  if (blurImg) {
                    lazySizes.rAF(function() {
                      if (!isForced && blurImg) {
                        blurImg.style.visibility = "";
                      }
                    });
                  }
                }, lazySizes.cfg.blurupCacheDelay || 33);
              }
            });
          }
        };
        var remove = function() {
          if (blurImg) {
            lazySizes.rAF(function() {
              lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
              try {
                blurImg.parentNode.removeChild(blurImg);
              } catch (er) {
              }
              blurImg = null;
            });
          }
        };
        var setStateUp = function(force) {
          isState++;
          isForced = force || isForced;
          if (force) {
            remove();
          } else if (isState > 1) {
            setTimeout(remove, 5e3);
          }
        };
        var onload = function() {
          img.removeEventListener("load", onload);
          img.removeEventListener("error", onload);
          if (blurImg) {
            lazySizes.rAF(function() {
              if (blurImg) {
                lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedOriginalClass);
              }
            });
          }
          lazySizes.fire(img, "blurUpLoaded");
          if (blurUp != "always" && (!isBlurUpLoaded || Date.now() - start < 66)) {
            setStateUp(true);
          } else {
            setStateUp();
          }
        };
        createBlurUpImg();
        img.addEventListener("load", onload);
        img.addEventListener("error", onload);
        lazySizes.aC(img, lazySizes.cfg.blurUpLoadingClass);
        var parentUnveil = function(e) {
          if (parent != e.target) {
            return;
          }
          lazySizes.aC(blurImg || img, lazySizes.cfg.blurUpInviewClass);
          setStateUp();
          parent.removeEventListener("lazybeforeunveil", parentUnveil);
        };
        if (!parent.getAttribute("data-expand")) {
          parent.setAttribute("data-expand", -1);
        }
        parent.addEventListener("lazybeforeunveil", parentUnveil);
        lazySizes.aC(parent, lazySizes.cfg.lazyClass);
      };
      window2.addEventListener("lazybeforeunveil", function(e) {
        var detail = e.detail;
        if (detail.instance != lazySizes || !detail.blurUp) {
          return;
        }
        var img = e.target;
        var picture = img.parentNode;
        if (picture.nodeName != "PICTURE") {
          picture = null;
        }
        createBlurup(picture, img, getLowSrc(picture, img) || transSrc, detail.blurUp);
      });
      window2.addEventListener("lazyunveilread", function(e) {
        var detail = e.detail;
        if (detail.instance != lazySizes) {
          return;
        }
        var img = e.target;
        var match = (getComputedStyle(img, null) || { fontFamily: "" }).fontFamily.match(regBlurUp);
        if (!match && !img.getAttribute("data-lowsrc")) {
          return;
        }
        detail.blurUp = match && match[1] || lazySizes.cfg.blurupMode || "always";
      });
    });
  }
});
export default require_ls_blur_up();
//# sourceMappingURL=lazysizes_plugins_blur-up_ls__blur-up.js.map
