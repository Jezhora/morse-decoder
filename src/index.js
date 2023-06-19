const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let str = '000000111100000000100000100011';
// console.log(str.split('0'))

function decode(expr) {
  // write your solution here
  
  let divideCode = [];

  for (let i = 0; i < expr.length; i += 10) {

    divideCode.push(expr.slice(i, i + 10 ))
 
  }
  

  console.log(divideCode)
 
}
decode(str)

// replace('11','-').replace('10','.').replace('00','')

module.exports = {
    decode
}