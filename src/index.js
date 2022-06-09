import { pageLoad } from "./body";
import { homeTab } from "./home";
import { menuTab } from "./menu";
import { contactTab } from "./contact";
import { deliveryTab } from "./delivery";
import './styles/styles.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';
import './styles/delivery.css';

pageLoad();
homeTab();
let currentTab = "Home";

const info = document.querySelector(".info");
const menuTabs = document.querySelectorAll("li");
menuTabs.forEach(tab => {
	tab.addEventListener("click", () => {
		const tabName = tab.textContent;
		if (tabName === currentTab) return;
		else currentTab = tabName;
		info.textContent = "";
		menuTabs.forEach(tab => {
			tab.classList.remove("active");
		});
		if (tabName === "Home") homeTab();
		if (tabName === "Menu") menuTab();
		if (tabName === "Contact") contactTab();
		if (tabName === "Delivery") deliveryTab();
		tab.classList.add("active");
	});
});