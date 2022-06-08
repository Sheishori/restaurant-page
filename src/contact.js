function contactTab() {
	const contact = document.createElement("div");
	const title = document.createElement("h3");
	const list = document.createElement("ul");
	const managerLi = document.createElement("li");
	const manager = document.createElement("div");
	const mPhone = document.createElement("p");
	const mEmail = document.createElement("p");
	const chefLi = document.createElement("li");
	const chef = document.createElement("div");
	const cPhone = document.createElement("p");
	const cEmail = document.createElement("p");
	const addressDiv = document.createElement("div");
	const address = document.createElement("p");
	const map = document.createElement("iframe");

	const menuTabs = document.querySelectorAll("li");
	menuTabs.forEach(tab => {
		tab.classList.remove("active");
	});

	contact.setAttribute("id", "contact");
	title.textContent = "Contact us:";
	manager.textContent = "Manager";
	mPhone.textContent = "Phone: 987 654 321";
	mEmail.textContent = "E-mail: movingchairs@legitemail.com";
	chef.textContent = "Chef";
	cPhone.textContent = "Phone: 123 454 321";
	cEmail.textContent = "E-mail: eatgoodfish@legitemail.com";
	addressDiv.textContent = "Restaurant Address";
	address.textContent = "1 Food Street, London";
	map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281080455!2d-0.24168026907984907!3d51.52877184048198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondyn%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1654697318384!5m2!1spl!2spl";
	map.setAttribute("loading", "lazy");
	map.referrerPolicy = "no-referrer-when-downgrade";

	managerLi.append(manager, mPhone, mEmail);
	chefLi.append(chef, cPhone, cEmail);
	list.append(managerLi, chefLi);
	contact.append(title, list, addressDiv, address, map);

	const info = document.querySelector(".info");
	info.append(contact);
};

export { contactTab };