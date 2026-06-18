import "../scss/app.scss";

import lazySizes from "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/object-fit/ls.object-fit";
import "lazysizes/plugins/blur-up/ls.blur-up";

lazySizes.cfg.blurupMode = "auto";

// layouts
import "./layouts/navigation.js";
import "./layouts/mobile-menu.js";

// class
import Wow from './class/Wow.js';
import "./class/Lenis";
import Preloader from "./class/Preloader";
const preloader = new Preloader();

// components
import './components/now.js';