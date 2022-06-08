function contactTab() {
	const menuTabs = document.querySelectorAll("li");
	menuTabs.forEach(tab => {
		tab.classList.remove("active");
	});

	const contact = document.createElement("div");
	contact.textContent = "contact";

	const info = document.querySelector(".info");
	info.append(contact);
};

export { contactTab };