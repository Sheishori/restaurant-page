function deliveryTab() {
	const delivery = document.createElement("div");
	delivery.textContent = "delivery";

	const info = document.querySelector(".info");
	info.append(delivery);
};

export { deliveryTab };