'use strict';

// //arguments object - no longer bound with arrow functions
// const add = (a, b) => {
//     // console.log(arguments); NO LONGER BOUND ON ARROW FUNCTIONS
//     return a + b;
// }

// console.log(add(55, 1, 1000, 2));


//this keyword - no longer bound
var user = {
    name: 'Misael',
    cities: ['Hermosillo', 'Sonora'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

//Challenge area
var multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
