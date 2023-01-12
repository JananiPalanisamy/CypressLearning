//Object

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    car: ["vento", "tata nexon", "kia"]
}
console.log(customer)
//dot notation
customer.firstName = "Mike"
//bracket notation
customer['lastName'] = "Silver"

console.log("First Name: ",customer.firstName)  
console.log("Last Name", customer['lastName'])
console.log(`${customer.firstName}  ${customer['lastName']}`)


//Arrays
var car = ["vento", "tata nexon", "kia"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.car[0])
