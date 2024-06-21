const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'mine');
const outputFile = path.join(__dirname, 'imageList.js');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    const content = `export const wallpapers = ${JSON.stringify(imageFiles)};\nexport { wallpapers };`;
    fs.writeFile(outputFile, content, (err) => {
        if (err) throw err;
        console.log('Image list generated successfully!');
    });
});
