import truck from '../img/truck-fast.png'

function deliveryTab() {
	const delivery = document.createElement("div");
	const img = new Image();
	const order = document.createElement("h3");
	const list = document.createElement("ul");
	const phone = document.createElement("li");
	const uber = document.createElement("li");

	delivery.setAttribute("id", "delivery");
	img.src = truck;
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