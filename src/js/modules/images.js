const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("img");

  imgPopup.classList.add("popup_img");
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  imgPopup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
      document.body.style.overflow = "hidden";
    }

    const closeImg = () => {
      imgPopup.style.display = "none";
      document.body.style.overflow = "auto";
    };

    if (target && target.matches("div.popup_img")) {
      closeImg();
    }

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closeImg();
      }
    });
  });
};

export default images;
