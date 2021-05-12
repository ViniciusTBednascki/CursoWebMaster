// include node fs module
var fs = require('fs');
var https = require('https');

// writeFile function with filename, content and callback function
function createFile(contador) {
    fs.writeFile(`C:/Users/DEV1/Documents/newfile_${contador}.txt`, `Learn Node FS module ${contador}`, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

for (let i = 0; i < 10; i++) {
    createFile(i)
}