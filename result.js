"use strict"

const inputText = document.querySelector('.head input');
const addButtons = document.querySelector('.add');
const infoContainer = document.querySelector('.main');
const counter = document.querySelector('.number');

addButtons.addEventListener('click', () => {
	if (inputText.value === '') {
		alert('Some thing wrong!!!')
	} else {
		const elem = document.createElement('div');
		elem.classList.add('elem');
		elem.innerHTML = `
			<span class="descr">${inputText.value}</span>
			<button class="delete"></button>`;

		infoContainer.append(elem);

		counter.innerText = document.querySelectorAll('.elem').length;

		saveData()
	}
});

infoContainer.addEventListener('click', (event) => {
	const isClicked = event.target;
	switch (isClicked.tagName) {
		case 'SPAN':
			isClicked.classList.toggle('active');
			saveData();
			break;
		case 'BUTTON':
			isClicked.parentElement.remove();
			counter.innerText = document.querySelectorAll('.elem').length;
			saveData();
			break;
	}
});

function saveData() {
	localStorage.setItem("todoList", infoContainer.innerHTML);
	console.log("str");
}

function getData() {
	infoContainer.innerHTML = localStorage.getItem("todoList");
	counter.innerText = document.querySelectorAll('.elem').length;
}
getData();

new Sortable(infoContainer, {
	animation: 350,
	ghostClass: 'blue-background-class',
	onSort: function () {
		saveData();
	}
})









