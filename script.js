//your JS code here. If required.
const count = document.getElementById("counter");
const incBtn = document.getElementById("incrementBtn");

incBtn.addEventListener("click", () => {
	let currVal = parseInt(count.innerText);
	alert(currVal);
	count.innerText = currVal + 1;
});