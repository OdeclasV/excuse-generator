let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

// passing 'array' as parameter to make sure 
// random number will be an index within array
function getARandomInt(array) {
    let number = Math.floor(Math.random() * array.length)
    return number;
}

function getRandomIndex(array) {
  let index = getARandomInt(array)
  return array[index];
}

function generateExcuse() {
  let first = getRandomIndex(who) // making this a variable to make sure getImage, below, works
  let sentence = first + ' ' + getRandomIndex(action) + ' ' + getRandomIndex(what) + ' ' + getRandomIndex(when)
  document.getElementById('image').src = getImage(first)
  return sentence;
}

function getImage(who) {
    if (who == 'The dog') {
        return 'https://bit.ly/3jLHXfQ'
        }
    else if (who == 'My grandma') {
            return 'https://bit.ly/2Xcl7GB'
        }
    else if (who == 'My bird'){
        return 'https://bit.ly/3lPs76v'
    }
    else if (who == 'His turtle'){
        return 'https://bit.ly/3fRY8Hi'
    }
}
document.getElementById("excuse").innerHTML = generateExcuse();