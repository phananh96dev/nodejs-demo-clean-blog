const fs = require('fs');

const getBase64 = (file) => {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

// function getBase64(file) {
    
// }

module.exports = getBase64;