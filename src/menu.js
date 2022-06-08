function menuTab() {
	const menu = document.createElement("div");
	menu.textContent = "menu";

	const info = document.querySelector(".info");
	info.append(menu);
};

export { menuTab };