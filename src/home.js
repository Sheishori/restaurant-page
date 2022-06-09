function homeTab() {
	const home = document.createElement("div");
	const image = document.createElement("div");
	const text = document.createElement("div");

	home.setAttribute("id", "home");
	image.classList.add("food-image");
	text.classList.add("text");
	text.textContent = "Saiou Sushi specializes in delicious food featuring fresh ingredients and masterful preparation by our culinary team. Whether you're ordering a multi-course meal or grabbing a drink and a bowl of ramen, Saikou Sushi's lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.";

	home.append(image, text);
	const info = document.querySelector(".info");
	info.appendChild(home);
};

export { homeTab };