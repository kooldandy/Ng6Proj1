const express = require('express');
const path = require('path');

const app = express();
console.log("PMODS---------------------------------- ", __dirname);
app.use(express.static('/dist/ng6Proj1'));

app.get('/*', (req, res) => {
    res.sendFile(path.join('/dist/ng6Proj1/index.html'));
});

app.listen(process.env.PORT || 8080, () =>{
    console.log('server started');
});
