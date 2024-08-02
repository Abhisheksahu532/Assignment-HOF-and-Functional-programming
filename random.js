function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printRandomNumber(){
  console.log(randomNumber(1, 100));
  setInterval(printRandomNumber, 2000)
}

printRandomNumber();