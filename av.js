let funInt;
funInt = function (name, add) {
    console.log(name);
};
funInt("abc", "da");
class Animal {
    constructor(name) {
        this.printName = function () {
            console.log(this.theName);
            console.log(this.theAge);
        };
        this.theName = name;
    }
    get age() {
        if (this.passcode == "abc") {
            return this._age;
        }
        else {
            return 0;
        }
    }
    set age(value) {
        if (this.passcode == "abc") {
            this._age = value;
        }
    }
}
class Elephant extends Animal {
    constructor(Name, Weight, age) {
        super(Name);
        this.theAge = age;
        this.x = document.getElementById('abc');
        document.getElementById('abc').value = 'abc';
    }
    ;
}
;
var ele = new Elephant("sdd", 12, 40);
ele.printName();
ele.passcode = "abc";
ele.age = 25;
console.log(ele.age);
