var baseObject = {
    width: 0,
    length: 0
};

var rectangle = Object.create(baseObject);
rectangle.width = 8;
rectangle.length = 6;
rectangle.area = function() {
    return this.width * this.length;
};

console.log(rectangle.area());
