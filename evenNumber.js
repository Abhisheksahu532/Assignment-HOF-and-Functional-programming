let evenNumbers = [];
let originalNumbers = [2,5,8,10,3];

originalNumbers.forEach(number =>{
    if(number % 2 == 0){
        evenNumbers.push(number);
    }
});

console.log(evenNumbers);