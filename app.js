const xPosition = document.querySelector("#offset-x p");
const yPosition = document.querySelector("#offset-y p");
const modalBtn = document.getElementById("modal-btn");
const box = document.querySelector(".mouse-box");
let modal = document.getElementById("modal-parent");

function boxMouse(e, c) {
	box.style.display = "fixed";
	box.style.top = e.clientY - 30 + "px";
	box.style.left = e.clientX - 30 + "px";
	xPosition.innerHTML = e.clientX;
	yPosition.innerHTML = e.clientY;
	box.innerHTML = c;
}

modalBtn.onclick = function () {
	modal.style.display = "block";
};

window.onclick = function (e) {
	if (e.target === modal) {
		modal.style.display = "none";
	}
};

const countries = Array.from(document.getElementsByClassName("country"));
countries.forEach(function (country) {
	country.addEventListener("mousemove", (e) => {
		box.style.display = "block";
		box.style.top = e.pageY - 10 + "px";
		box.style.left = e.pageX + 20 + "px";
		box.textContent = e.target.getAttribute("id");
	});

	country.addEventListener("mouseleave", () => {
		box.style.display = "none";
	});
});
