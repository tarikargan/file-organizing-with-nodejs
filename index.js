const fs = require('fs');
const fse = require('fs-extra');
const path = require('node:path');

let param  = process.argv[2];

let __path   = path.dirname(param);
let __dir    = path.basename(param);

let filePath = path.join(__path, __dir);


fs.readdir(filePath, (err, files) => {
    files.forEach(file => {
        let ext     = path.extname(file).substr(1);
        
        let typeDir = path.join(filePath, ext);

        if (!fs.existsSync(typeDir)){
            fs.mkdirSync(typeDir);
        }

        fse.move(`${filePath}/${file}`, `${typeDir}/${file}`, err => {
            if (err) return console.error(err)
            console.log('success!')
        });
    });
  });

