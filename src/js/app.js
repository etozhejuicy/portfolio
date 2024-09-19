import "../scss/app.scss";

import "./modules/jquery.module.js";
import "./modules/wow.module.js";

import lazySizes from "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/object-fit/ls.object-fit";
import "lazysizes/plugins/blur-up/ls.blur-up";

lazySizes.cfg.blurupMode = "auto";

// layouts
import "./layouts/header.js";
import "./layouts/navigation.js";
import "./layouts/mobile-menu.js";

// components
import "./components/cursor.js";

// class
import "./class/Lenis";
import Preloader from "./class/Preloader";
const preloader = new Preloader();
