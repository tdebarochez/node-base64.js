var sys = require('sys'),
    fs  = require('fs'),
    base64 = require('./base64');

sys.puts(sys.inspect(base64.encode(base64.decode(fs.readFileSync('test.txt', 'ascii'))) == fs.readFileSync('test.txt', 'ascii').replace(/([\r\n]+)/gi, '')));
sys.puts(sys.inspect(base64.decode(base64.encode("ABCD")) == "ABCD"));
sys.puts(sys.inspect(base64.encode('What do ya want for nothing?')=='V2hhdCBkbyB5YSB3YW50IGZvciBub3RoaW5nPw=='));
sys.puts(sys.inspect(base64.decode(base64.encode('What do ya want for nothing?'))=='What do ya want for nothing?'));
var textBuff = 'What do ya want for nothing?';
var baseBuff = 'V2hhdCBkbyB5YSB3YW50IGZvciBub3RoaW5nPw==';
sys.puts(sys.inspect(base64.encode(textBuff)=='V2hhdCBkbyB5YSB3YW50IGZvciBub3RoaW5nPw=='));
sys.puts(sys.inspect(base64.decode(baseBuff)=='What do ya want for nothing?'));