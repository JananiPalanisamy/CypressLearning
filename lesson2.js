//concatenation and interpolation
var product = "cup"
var cost = 50
var description = "The price for your "+product+" is "+cost+" dollars"   //concatenation
var description2 = `The price for your ${product} is ${cost} dollars`    //interpolation
console.log(description)
console.log(description2)