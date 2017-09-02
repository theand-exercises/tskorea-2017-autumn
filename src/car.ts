function Car(name) {
    this.name = name;
    this.speed = 0;

    this.honk = function() {
        console.log("부우우웅");
    };

    this.accelerate = function(speed) {
        this.speed = this.speed + speed;
    }
}

var car = new Car("BENZ");
car.honk();
console.log(car.speed);
car.accelerate(10);
console.log(car.speed);
