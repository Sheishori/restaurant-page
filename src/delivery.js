function deliveryTab() {
	const delivery = document.createElement("div");
	const img = document.createElement("img");
	const order = document.createElement("h3");
	const list = document.createElement("ul");
	const phone = document.createElement("li");
	const uber = document.createElement("li");

	const menuTabs = document.querySelectorAll("li");
	menuTabs.forEach(tab => {
		tab.classList.remove("active");
	});

	delivery.setAttribute("id", "delivery");
	img.src = "./img/truck-fast.png";
	img.alt = "fast truck image"
	order.textContent = "Order with delivery by:";
	phone.textContent = "Phone: +0 123 456 789";
	uber.innerHTML = "Uber Eats <button>Order Now</button>";

	list.append(phone, uber);
	delivery.append(img, order, list);
	const info = document.querySelector(".info");
	info.append(delivery);
};

export { deliveryTab };