const fs = require('fs');

let text = '';

fs.writeFile('./02-write-file/test.txt', '', () => {

});
console.log('Введите текст: ');
process.stdin.on('data', data => {
  if(data.toString().trim() === 'exit') {
    console.log('bye bye !');
    process.exit();
  }
  fs.writeFile('./02-write-file/test.txt', `${text}${data}`, () => {
    text = `${text}${data}`;
  });
  
  process.on('SIGINT', () => {
    console.log('bye bye !');
    process.exit();
  });
});
//node 02-write-file