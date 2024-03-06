const express = require ('express');
const path = require('path');
const app = express();
const port = 5001;



app.get('/', function (req, res) {
    const options = {
        root: path.join(__dirname)
    };
    const fileName = 'index.html'
    res.sendFile(fileName, options, function(err){
        if(err){
            console.error('Error while sending file.', err );
        }
        else{
            console.log('File Sent.', fileName);
        }
    });
});

app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
});