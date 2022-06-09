import fmaki from './img/fmaki.jpg'
import vmaki from './img/vmaki.jpg'
import snigiri from './img/snigiri.jpg'
import wnigiri from './img/wnigiri.jpg'
import futomaki from './img/futomaki.png'
import sashimi from './img/sashimi.jpg'
import sets from './img/sets.jpg'
import ramen from './img/ramen.png'

function menuTab() {
	const menu = document.createElement("div");
	const title = document.createElement("h3");
	const list = document.createElement("ul");
	function menuItem(name, imgSrc) {
		const itemli = document.createElement("li");
		const itemImgWrapper = document.createElement("div");
		const itemImg = new Image();
		const itemName = document.createElement("div");
	
		itemImgWrapper.classList.add("img");
		itemImg.src = imgSrc;
		itemImg.alt = name;
		itemName.textContent = name;
		
		itemImgWrapper.appendChild(itemImg);
		itemli.append(itemImgWrapper, itemName);
		list.append(itemli);
	};

	const menuTabs = document.querySelectorAll("li");
	menuTabs.forEach(tab => {
		tab.classList.remove("active");
	});

	menu.setAttribute("id", "menu");
	title.textContent = "Menu";
	menuItem("Fish Hosomaki", fmaki);
	menuItem("Vegetable Hosomaki", vmaki);
	menuItem("Salmon Nigiri", snigiri);
	menuItem("Shiromi Nigiri", wnigiri);
	menuItem("Futomaki", futomaki);
	menuItem("Sashimi", sashimi);
	menuItem("Assorted Sets", sets);
	menuItem("Ramen", ramen);

	menu.append(title, list);
	const info = document.querySelector(".info");
	info.append(menu);
};

export { menuTab };