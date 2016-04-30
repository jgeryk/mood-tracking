var express     = require('express');
var app         = express();
var path        = require('path');

// Configuration
app.use(express.static(path.join(__dirname, '/public')));
app.use('/public', express.static(__dirname + '/public'));



app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(){
  console.log("Express listening on port 3000");
});
