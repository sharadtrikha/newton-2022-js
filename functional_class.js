// Parent class called PERSON which needs to be initialized with certain properties
// like name and age.

// There is a child class called EMPLOYEE (which is a PERSON too!) and it needs to be
// initialized with properties like name, age and employmentType.

// function Person(name,age) {
//     this.name = name;
//     this.age = age; // instance property
// }

// Person.prototype.canWalk = function() {
//     console.log(`${this.name} can walk..!`);
// }

// function Employee(name,age,employmentType) {
//     Person.call(this, name,age);
//     this.employmentType = employmentType;
// }


// Employee.prototype = Object.create(Person.prototype);
// here Employee.protype.constructor property is lost because we are assiging
// Employee.prototype to SOMETHING ELSE EXPLICTLY

// Now we can reset constructor property to Employee Property Explicitly
// Employee.prototype.constructor = Employee;

// const e1 = new Employee("Sharad", 28, "contract")



// Here, Person.prototype.constructor again points back to Person
// Does that mean -> Person.prototype.constructor === Person will be true ? YES!
// Person.prototype.constructor is set automatically to Person.

// const p1 = new Person("Sharad",28);

// New object is created and prototype of this newly created object is set to Person.prototype
// this keyword is pointed to newly created object
// to access prototype of p1 -> Object.getPrototypeOf(p1) can be used



// ES6 - CLASSES 
// Let us solve above question with different syntax 
// In js, class keyword exist and it is possible to write in object oriented manner
// but it is just syntactic sugar internally it gets converted to Function constructor
// syntax only.

class Person {

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    canWalk() {
        console.log(`${this.name} can walk..!`);
    }
}


class Employee extends Person {

    static isNew = true; // public static field
    #status; // private instance field -> Any variable can be marked as private 
        // by prefix variable name with # sign
    constructor(name,age,employmentType) {
        super(name,age);
        this.employmentType = employmentType;
    }

    get status() {
        return this.#status;
    }

    set status(value) {
        this.#status = value;
    }

}

const p1 = new Employee("Sharad", 28, "contract");