class Feedback {
  constructor() {
    this.events();
  }

  events() {
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = "Спасибо за вашу заявку!";
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                status.innerHTML =
                  "Упс! Возникла проблема с отправкой вашей формы";
              }
            });
          }
        })
        .catch((error) => {
          status.innerHTML = "Упс! Возникла проблема с отправкой вашей формы";
        });
    }
    form.addEventListener("submit", handleSubmit);
  }
}

export default Feedback;
