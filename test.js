var sys = require('sys'),
    fs  = require('fs'),
    base64 = require('./base64');

sys.puts(sys.inspect(base64.encode(base64.decode(fs.readFileSync('test.txt', 'ascii'))) == fs.readFileSync('test.txt', 'ascii').replace(/([\r\n]+)/gi, '')));
sys.puts(sys.inspect(base64.decode(base64.encode("ABCD")) == "ABCD"));
