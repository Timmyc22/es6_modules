console.log("Hello World");

import { WishList } from './wishlist';

const wishlist = new WishList();

const form = document.getElementById('addCarForm');
const makeInput = document.getElementById('makeInput');
const modelInput = document.getElementById('modelInput');
const yearInput = document.getElementById('yearInput');
const makeDisplay = document.getElementById('car-make');
const modelDisplay = document.getElementById('car-model');
const yearDisplay = document.getElementById('car-year');
const removeBtn = document.getElementById('removeBtn');
const carList = document.getElementById('carList');

form.addEventListener('submit', addCar);
removeBtn.addEventListener('click', () => {
    const carId = parseInt(removeBtn.getAttribute('data-carId'), 10);
    removeCarById(carId);
});

function showCarDetails(car) {
    makeDisplay.textContent = car.make;
    modelDisplay.textContent = car.model;
    yearDisplay.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute('data-carId', car.id);
}

function updateDOMList() {
    carList.innerHTML = '';
    wishlist.list.forEach((car) => {
        const li = document.createElement('li');
        li.textContent = `${car.make} ${car.model}`;
        li.className = 'list-group-item';
        li.addEventListener('click', () => showCarDetails(car));
        carList.appendChild(li);
    });
}

function addCar(event) {
    event.preventDefault();
    const make = makeInput.value;
    const model = modelInput.value;
    const year = yearInput.value;
    wishlist.add(make, model, year);
    updateDOMList();
    form.reset();
}

function removeCarById(carId) {
    wishlist.remove(carId);
    updateDOMList();
    makeDisplay.textContent = '';
    modelDisplay.textContent = '';
    yearDisplay.textContent = '';
    removeBtn.disabled = true;
}

// Initial update of the DOM list
updateDOMList();
