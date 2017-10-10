var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var os = require('os-utils');

var sec = 0;
var json = {
  load: [],
  value: 0
};

function handler (req, res) {
  switch (req.url) {
        case "/css/main.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            var css = fs.readFileSync('css/main.css', 'utf8');
            res.write(css);
            break;
        case "/app.js" :
            res.writeHead(200, {"Content-Type": "application/javascript"});
            var js = fs.readFileSync('app.js', 'utf8');
            res.write(js);
            break;
        default :    
            res.writeHead(200, {"Content-Type": "text/html"});
            var html = fs.readFileSync('index.html', 'utf8');
            res.write(html);
    };

    res.end();
}

function usage() {
  os.cpuUsage(function(v){
    sec += 2; //time since page open
    v = Math.round(v * 100); //cpu usage
    json.value = v;
    json.load.push({"x":sec, "y":v});
  });
  
  io.sockets.send(json);
}

usage();
/* get cpu usage every 2 seconds*/
setInterval(usage, 2000);

app.listen(8080);
