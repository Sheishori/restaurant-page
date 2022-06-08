import { pageLoad } from "./body";
import { homeTab } from "./home";
import { menuTab } from "./menu";
import { contactTab } from "./contact";
import { deliveryTab } from "./delivery";

pageLoad();
homeTab();

const info = document.querySelector(".info");
const menuTabs = document.querySelectorAll("li");
menuTabs.forEach(tab => {
	tab.addEventListener("click", () => {
		const tabName = tab.textContent;
		info.textContent = "";
		if (tabName === "Home") homeTab();
		if (tabName === "Menu") menuTab();
		if (tabName === "Contact") contactTab();
		if (tabName === "Delivery") deliveryTab();
		tab.classList.add("active");
	});
});