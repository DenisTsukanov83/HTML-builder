const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, './secret-folder'), { withFileTypes: true}, (err, files) => {
  files.forEach(el => {
    fs.stat(path.join(__dirname, `./secret-folder/${el.name}`), (err, stats) => {
      if(el.isFile()) {
        console.log(`${el.name} - ${el.name.split('.').pop()} -  ${stats.size}`);
      }
    });
  });
});

//node 03-files-in-folder