//OBJECT//
document.write("<h1>JavaScript Content : Objects</h1> ")


//Q1

var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];
var b = 0;
for (i = 0; i < itemsArray.length; i++) {

    var total = "Total prize " + itemsArray[i].name + " " + itemsArray[i].price * itemsArray[i].quantity;
    document.write(total + "<br>");
    var c = itemsArray[i].price * itemsArray[i].quantity;
    b += c

}

document.write("Total prize of all items" + b);


//Q2

var obj = {

    name: "afifa",
    emial: "xyz@gmail.com",
    password: "abc....",
    gender: "Female",
    city: "Karachi",
    country: "Pakistan",
    age: 17

};

console.log("age" in obj);
console.log("country" in obj);
console.log("firstName" in obj);
console.log("lastName" in obj);


//Q3

// constructor
function Info(nam, age, gender, city) {
    this.name = nam
    this.age = age
    this.gender = gender
    this.city = city
}

var new1 = new Info("Hoorain", 17, "female", "karachi")
var new2 = new Info("Noor", 17, "female", "karachi")
var new3 = new Info("Ayesha", 17, "female", "karachi")
console.log(new1, new2, new3);


   
function Pop(name,address,male,female,Eduaction,Profession) {

    this.nam1 = name
    this.address  = address
    this.male = male
    this.female = female
    this.Eduaction = Eduaction
    this.Profession = Profession

 
}
var count = new Pop("Afifa","model","female","Masters","Student")

console.log(count)
