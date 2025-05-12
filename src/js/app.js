import "../scss/app.scss";

import "./modules/jquery.module.js";
import "./modules/wow.module.js";

import lazySizes from "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/object-fit/ls.object-fit";
import "lazysizes/plugins/blur-up/ls.blur-up";

lazySizes.cfg.blurupMode = "auto";

// layouts
import "./layouts/mobile-menu.js";
import "./layouts/modal.js";

// class
import "./class/Lenis";
import routes from "./class/routes.js";
import Preloader from "./class/Preloader";
const preloader = new Preloader();

// components
import './components/now.js';