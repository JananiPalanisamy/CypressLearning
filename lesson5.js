//loop

for(let i=0; i<5; i++)
{
    console.log(i)
}  

var cars=["vento", "Kia", "nexon"]
for(let c of cars)
{
    console.log(c)
}

//ES6 syntax
console.log("-----Inside ES6------")
cars.forEach( car => {
    console.log(car)
})