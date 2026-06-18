import Items from "../components/items/works";
import routes from "../class/routes";

const works = new Items(5); 

const moreButton = document.createElement("a");

moreButton.className = "btn btn-lg btn-yellow btn-icon";
moreButton.setAttribute("href", `${routes.urls["works"]}`);
moreButton.textContent = "Смотреть остальные работы";

works.list.appendChild(moreButton);
