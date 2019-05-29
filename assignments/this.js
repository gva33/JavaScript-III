/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding: The first principle states that when in the global scope, the value of "this" will be the window/console object.  Using the forest analogy, "this" will refer to the whole forest, not a specific tree.

* 2. Implicit Binding: Again, using the forest analogy, the second rule of implicit binding points to a specific tree in the forest.  This is done by looking at the function that precedes a dot.

* 3. New Binding: The concept of new binding uses the new keyword to essentially plant a new tree in the forest.

* 4. Explicit Binding:

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function hello(name){
    return `Hello ${this.name}`;  
  }  
  console.log(hello("world"))

// Principle 2

// code example for Implicit Binding

const car = {
    make: Ford,  
    model: Mustang,  
    speed: fast,  
    drive: function(){  
                return `My ${this.model} is very ${this.speed}`;  
    }  
  }  
  console.log(car.drive());

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
const car = {
    "model":"Mustang"  
  }   
  
  function myCar(color,speed){  
    return `I have a ${color} ${this.car} and it drives very ${speed};
  }
  console.log(myCar.call(car,"black","fast"));
  