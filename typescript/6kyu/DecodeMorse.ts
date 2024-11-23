const MORSE_CODE: {[key: string]: string} = {
  '.-': 'A',
  '-...': 'B', 
  '-.-.': 'C', 
  '-..': 'D', 
  '.': 'E',
  '..-.': 'F', 
  '--.': 'G', 
  '....': 'H', 
  '..': 'I', 
  '.---': 'J',
  '-.-': 'K', 
  '.-..': 'L', 
  '--': 'M', 
  '-.': 'N', 
  '---': 'O',
  '.--.': 'P', 
  '--.-': 'Q', 
  '.-.': 'R', 
  '...': 'S', 
  '-': 'T',
  '..-': 'U', 
  '...-': 'V', 
  '.--': 'W', 
  '-..-': 'X', 
  '-.--': 'Y',
  '--..': 'Z', 
  '-----': '0', 
  '.----': '1', 
  '..---': '2', 
  '...--': '3',
  '....-': '4', 
  '.....': '5', 
  '-....': '6', 
  '--...': '7', 
  '---..': '8',
  '----.': '9', 
  '.-.-.-': '.', 
  '--..--': ',', 
  '..--..': '?', 
  '.----.': "'",
  '-.-.--': '!', 
  '-..-.': '/', 
  '-.--.': '(', 
  '-.--.-': ')', 
  '.-...': '&',
  '---...': ':', 
  '-.-.-.': ';', 
  '-...-': '=', 
  '.-.-.': '+', 
  '-....-': '-',
  '..--.-': '_', 
  '.-..-.': '"', 
  '...-..-': '$', 
  '.--.-.': '@', 
  '...---...': 'SOS'
};

function decodeMorse(morseCode: string): string {
  return morseCode.trim().split('   ').map(word => {
    return word.split(' ').map(letter => MORSE_CODE[letter]).join('');
  }).join(' ');
}