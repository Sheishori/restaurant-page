function homeTab() {
	const image = document.createElement("div");
	const text = document.createElement("div");

	image.classList.add("food-image");
	text.classList.add("text");
	text.textContent = "Saiou Sushi specializes in delicious food featuring fresh ingredients and masterful preparation by our culinary team. Whether you're ordering a multi-course meal or grabbing a drink and a bowl of ramen, Saikou Sushi's lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.";

	const info = document.querySelector(".info");
	info.append(image, text);
};

export { homeTab };