function pageLoad() {
	//header area
	const header = document.createElement("header");
	const banner = document.createElement("div");
	const headline = document.createElement("div");
	const name = document.createElement("h1");
	const kanji = document.createElement("h2");
	const logo = document.createElement("img");
	const pageMenu = document.createElement("ul");
	const homeButton = document.createElement("li");
	const menuButton = document.createElement("li");
	const contactButton = document.createElement("li");
	const deliveryButton = document.createElement("li");
	
	banner.setAttribute("id", "banner");
	headline.setAttribute("id", "headline");
	name.textContent = "Saikou Sushi";
	kanji.textContent = "最高寿司";
	logo.src = "./img/logo.jpg";
	logo.alt = "Logo";
	homeButton.textContent = "Home";
	menuButton.textContent = "Menu";
	contactButton.textContent = "Contact";
	deliveryButton.textContent = "Delivery";
	
	headline.append(name, kanji);
	banner.append(headline, logo);
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
	const credit = document.createElement("div");
	
	copyright.textContent = "ⒸSheishori";
	credit.classList.add("credit");
	credit.innerHTML = 'Background - <a href="https://unsplash.com/@rapdelarea">Rap Dela Rea</a>, Bamboo texture - <a href="https://unsplash.com/@denisagati">Denis Agati</a>, Sushi - <a href="https://unsplash.com/@mahmoud_fawzy100">Mahmoud Fawzy</a>';
	
	footer.append(copyright, credit);
	
	// append to body
	const content = document.querySelector("#content");
	content.append(header, main, footer);
};

export { pageLoad };