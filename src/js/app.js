import "../scss/app.scss";

import "./modules/jquery.js";

// wow extend
import WOW from 'wow.js';
new WOW().init();

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// layouts
import "./layouts/header.js";
import "./layouts/navigation.js";
import "./layouts/mobile-menu.js";

// components
import "./components/cursor.js";
import "./components/gradient.js";