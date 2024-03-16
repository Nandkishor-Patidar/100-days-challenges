var upper = 10000;
var guess;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while(guess !== upper) {
  guess = getRandomNumber(upper);
}

console.log(getRandomNumber(upper));