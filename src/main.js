import { getStaticMenu, getWeeklySpecials } from "./mod";

const staticMenu = await getStaticMenu();
const weeklyMenu = await getWeeklySpecials();

staticMenu.forEach((item) => {
	console.log(item.data());
})
weeklyMenu.forEach((item) => {
	console.log(item.data());
})

const weeklylist = document.querySelector("#weekly");
const staticlist = document.querySelector("#static");

staticMenu.forEach((item) => {
	let listItem = document.createElement("li");
	listItem.innerText += `${item.data().name} ${item.data().price} kr`;
	staticlist.appendChild(listItem);
})
weeklyMenu.forEach((item) => {
	let listItem = document.createElement("li");
	listItem.innerText += `${item.data().name} ${item.data().price} kr`;
	weeklylist.appendChild(listItem);
})
