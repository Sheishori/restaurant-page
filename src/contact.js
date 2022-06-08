function contactTab() {
	const contact = document.createElement("div");
	contact.textContent = "contact";

	const info = document.querySelector(".info");
	info.append(contact);
};

export { contactTab };