function menuTab() {
	const menu = document.createElement("div");
	const title = document.createElement("h3");
	const list = document.createElement("ul");
	function menuItem(name, imgSrc) {
		const itemli = document.createElement("li");
		const itemImgWrapper = document.createElement("div");
		const itemImg = document.createElement("img");
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
	menuItem("Fish Hosomaki", "./img/fmaki.jpg");
	menuItem("Vegetable Hosomaki", "./img/vmaki.jpg");
	menuItem("Salmon Nigiri", "./img/snigiri.jpg");
	menuItem("Shiromi Nigiri", "./img/wnigiri.jpg");
	menuItem("Futomaki", "./img/futomaki.png");
	menuItem("Sashimi", "./img/sashimi.jpg");
	menuItem("Assorted Sets", "./img/sets.jpg");
	menuItem("Ramen", "./img/ramen.png");

	menu.append(title, list);
	const info = document.querySelector(".info");
	info.append(menu);
};

export { menuTab };