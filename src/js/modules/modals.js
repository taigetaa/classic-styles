const modals = () => {
  const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");

    const closeModal = () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    };

    triggers.forEach((btns) => {
      btns.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window) => {
          window.style.display = "none";
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((window) => {
        window.style.display = "none";
      });

      closeModal();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((window) => {
          window.style.display = "none";
        });

        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    });
  };

  const showModalByTime = (selector, time) => {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  };

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
  showModalByTime(".popup", 6000);
};

export default modals;
