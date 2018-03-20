class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name   = name;
        this.age    = age;
    }
    getGreeting(){
        //return 'Hi I am ' + this.name + '!';
        return `Hi. I am ${this.name}!.`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class  Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major; //flip technique for return false instead of undefined
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            greeting += ` I'm visiting from ${this.location}`;
        }
        return greeting;
    }
}
const meTraveler = new Traveler('Misael Burboa', 29, 'Hermosillo, Sonora');
console.log(meTraveler.getGreeting());

// const me = new Student('Misael Burboa', 29, 'Information Systems Engineering');
// console.log(me.getDescription());
//
// const other = new Student();
// console.log(other.getDescription());
