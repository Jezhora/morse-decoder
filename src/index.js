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

function decode(expr) {
  // write your solution here
  const lengthCode = 10;
  let divideCode = [];
  let message = '';
  
  for (let i = 0; i < expr.length; i += lengthCode) {

    divideCode.push(expr.slice(i, i + lengthCode ));
  }

  for (let j = 0; j < divideCode.length; j++){

    for(let k = 0; k < lengthCode; k += 2){

      divideCode[j] = divideCode[j].replace('00', '').replace('11', '-').replace('10', '.');
    };
    
  }

  divideCode.forEach(item => {
    if (item === '**********') {
      message += ' ';
    }
    for( key in MORSE_TABLE){
      if(item === key){
        message += `${MORSE_TABLE[key]}`;
      }
    }
  })
  
  return message
}


module.exports = {
    decode
}