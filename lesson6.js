//declarative function(can be invoked any moment)
helloOne()
function helloOne(){
    console.log("--Inside declarative function--")
}

// helloOne()

//Anonymous function(no name for function)
// result()   //It will not work
var result = function(){
    console.log("Inside anonymous function")
}
result()


//ES6 function
// helloTwo()
var helloTwo = () =>{
    console.log("Inside ES6")
}
helloTwo()


//function with arguments
function printName(name, age){
    console.log("Name:",name+" age:", age)
}
printName("John Smith", 20)


//function with return
function multiple(number)
{
    return number*20
}
var myresult = multiple(2)
console.log("Multiple is "+myresult)

//import function
import {printAge} from '/Users/janani/Projects/CypressLearning/Helpers/printHelper.js'
printAge(32)

//import everything
import * as helper from '../Helpers/printHelper.js'
helper.printAge(90)