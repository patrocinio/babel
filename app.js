var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');

var language_translator = new LanguageTranslatorV2({
  "url": "https://gateway.watsonplatform.net/language-translator/api",
  "password": "d0CUp8GRSB34",
  "username": "c94efe0e-d151-4cc5-9ce7-7fc8626aacb0"
});

function translate (sentence) {
  language_translator.translate({
    text: sentence, source : 'en', target: 'pt' },
    function (err, translation) {
      if (err)
        console.log ('error:' + err);
      else {
        console.log (translation.translations[0].translation);
      }
});

}

console.log ("Welcome to Babel");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type a text in English  ', (answer) => {
  translate(answer);

  rl.close();
});


