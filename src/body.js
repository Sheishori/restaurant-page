function pageLoad() {
	//header area
	const header = document.createElement("header");
	const banner = document.createElement("div");
	const headline = document.createElement("h1");
	const logo = document.createElement("img");
	const pageMenu = document.createElement("ul");
	const homeButton = document.createElement("a");
	const homeLi = document.createElement("li");
	const menuButton = document.createElement("a");
	const menuLi = document.createElement("li");
	const contactButton = document.createElement("a");
	const contactLi = document.createElement("li");
	const deliveryButton = document.createElement("a");
	const deliveryLi = document.createElement("li");
	
	banner.setAttribute("id", "banner");
	headline.textContent = "Saikou Sushi";
	logo.src = "https://cdn.pixabay.com/photo/2015/04/07/18/38/sumi-e-711491_960_720.jpg";
	logo.alt = "Logo";
	homeLi.textContent = "Home";
	menuLi.textContent = "Menu";
	contactLi.textContent = "Contact";
	deliveryLi.textContent = "Delivery";
	
	banner.append(headline, logo);
	homeButton.append(homeLi);
	menuButton.append(menuLi);
	contactButton.append(contactLi);
	deliveryButton.append(deliveryLi);
	pageMenu.append(homeButton, menuButton, contactButton, deliveryButton);
	header.append(banner, pageMenu);
	
	// main area
	const main = document.createElement("main");
	const wrapper = document.createElement("div");
	const bamboo = document.createElement("div");
	const info = document.createElement("div");
	
	wrapper.classList.add("wrapper");
	bamboo.classList.add("bamboo");
	info.classList.add("info");
	
	wrapper.append(bamboo, info);
	main.appendChild(wrapper);
	
	// footer area
	const footer = document.createElement("footer");
	const copyright = document.createElement("div");
	
	copyright.textContent = "ⒸSheishori";
	
	footer.appendChild(copyright);
	
	// append to body
	const content = document.querySelector("#content");
	content.append(header, main, footer);
};

export { pageLoad };