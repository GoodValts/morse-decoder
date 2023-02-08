let expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"

//console.log(expr.length % 10)

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

//console.log ("testtest");
//decode(expr);

function decode(expr) {
    let i = 0;
    let letter = '';
    
    
    while (expr[i]==='0') {
        i++;
    }
    expr = expr.substring(i);
    
    for (i=0; i<expr.length; i+=2) {
        if (expr[i+1] === '0') {
            letter = letter + '.';
            //console.log(expr[i],expr[i+1]);
            //console.log(letter, "letter inside of if test");
        } else {
            letter = letter + '-';
        }
        //console.log(i)
    }
    //console.log("!!!");
    console.log(MORSE_TABLE[letter]);
    return MORSE_TABLE[letter];
}
//console.log("!!! expt=", expr);
    let result = "";    

    for(i=0; i<expr.length; i+=10) {
        if (expr.slice(i, i+1) === '*') {
            result = result + ' '
        } else {
        //console.log (expr.slice(i,i+10), "lol sobaka sidit letter#", i);
        result = result + decode(expr.slice(i, i+10))
        console.log(expr.slice(i, i+10))
        }
    }
console.log (result)
