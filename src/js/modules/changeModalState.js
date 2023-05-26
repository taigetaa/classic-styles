import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForms = document.querySelectorAll(".balcon_icons_img");
  const windowWidth = document.querySelectorAll("#width");
  const windowHeight = document.querySelectorAll("#height");
  const windowType = document.querySelectorAll("#view_type");
  const windowProfiles = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  const bindActionToElems = (event, elem, prop) => {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
            case "INPUT":
                state[prop] = item.value;
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }

        console.log(state);
      });
    });
  };

  bindActionToElems("click", windowForms, "form");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfiles, "profile");
};

export default changeModalState;
