import "./slider";
import modals from "./modules/modals";
import initTabs from "./modules/initTabs";
import initForms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {};
  let deadline = "2023-08-01";

  changeModalState(modalState);
  modals();
  initTabs({
    headerSelector: ".glazing_slider",
    tabSelector: ".glazing_block",
    contentSelector: ".glazing_content",
    activeClass: "active",
  });
  initTabs({
    headerSelector: ".decoration_slider",
    tabSelector: ".no_click",
    contentSelector: ".decoration_content > div > div",
    activeClass: "after_click",
  });
  initTabs({
    headerSelector: ".balcon_icons",
    tabSelector: ".balcon_icons_img",
    contentSelector: ".big_img > img",
    activeClass: "do_image_more",
    display: "inline-block",
  });
  initForms(modalState);
  timer(".container1", deadline);
  images();
});
