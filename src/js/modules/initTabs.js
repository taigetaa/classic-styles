const initTabs = ({ headerSelector, tabSelector, contentSelector, activeClass }) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = "none";
    });

    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    contents[i].style.display = "block";
    tabs[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  const open = (target) => {
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tabs.forEach((tab, i) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }

  header.addEventListener("click", (e) => {
    const target = e.target;
    open(target);
  });

  header.addEventListener("keydown", (e) => {
    const target = e.target;
    if (e.code === "Enter") {
      open(target);
    }
  });

};

export default initTabs;
