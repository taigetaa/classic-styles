import { event } from "jquery";

const initForms = () => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("inpit");
  const phoneInputs = document.querySelectorAll("input[name='user_phone']");

    phoneInputs.forEach(number => {
        number.addEventListener('input', () => {
            number.value = number.value.replace(/\D/, '');
        });
    });

  const message = {
    loading: "Загрузка...",
    success: "Скоро мы с Вами свяжемся!",
    failure: "Что-то пошло не так...",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((field) => {
      field.value = "";
    });
  };

  forms.forEach((event) => {
    event.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      event.appendChild(statusMessage);

      const formData = new FormData(event);

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default initForms;
