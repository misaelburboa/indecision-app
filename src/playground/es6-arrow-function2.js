// //arguments object - no longer bound with arrow functions
// const add = (a, b) => {
//     // console.log(arguments); NO LONGER BOUND ON ARROW FUNCTIONS
//     return a + b;
// }

// console.log(add(55, 1, 1000, 2));


//this keyword - no longer bound
const user = {
    name: 'Misael',
    cities: ['Hermosillo', 'Sonora'],
    printPlacesLived(){
        return this.cities.map( (city) => this.name + ' has lived in ' + city );

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}

console.log(user.printPlacesLived());


//Challenge area
const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map( (number) => number * this.multiplyBy );
    }
}

console.log(multiplier.multiply());