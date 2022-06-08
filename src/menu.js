function menuTab() {
	const menuTabs = document.querySelectorAll("li");
	menuTabs.forEach(tab => {
		tab.classList.remove("active");
	});

	const menu = document.createElement("div");
	menu.textContent = "menu";

	const info = document.querySelector(".info");
	info.append(menu);
};

export { menuTab };