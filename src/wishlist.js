export class WishList {
    constructor() {
        this.list = [];
        this.nextId = 1;
    }

    add(make, model, year) {
        const car = { id: this.nextId++, make, model, year };
        this.list.push(car);
    }

    remove(carId) {
        this.list = this.list.filter(car => car.id !== carId);
    }
}
