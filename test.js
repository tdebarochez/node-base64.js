var sys = require('sys'),
    fs  = require('fs'),
    base64 = require('./base64');

var nb_test = 0;
function test (comparison) {
  nb_test++;
  if (!comparison) {
    sys.puts('test #' + nb_test + ' failed');
    process.exit(1);
  }
}

test(base64.encode("A") == "QQ==");
test(base64.encode("AB") == "QUI=");
test(base64.encode("ABC") == "QUJD");
test(base64.encode("ABCD") == "QUJDRA==");
test(base64.decode(base64.encode("A")) == "A");
test(base64.decode(base64.encode("AB")) == "AB");
test(base64.decode(base64.encode("ABC")) == "ABC");
test(base64.decode(base64.encode("ABCD")) == "ABCD");
test(base64.encode(base64.decode(fs.readFileSync('test.txt', 'ascii'))) == fs.readFileSync('test.txt', 'ascii').replace(/([\r\n]+)/gi, ''));
test(base64.encode('What do ya want for nothing?')=='V2hhdCBkbyB5YSB3YW50IGZvciBub3RoaW5nPw==');
test(base64.decode(base64.encode('What do ya want for nothing?'))=='What do ya want for nothing?');
test(base64.encode('What do ya want for nothing?')=='V2hhdCBkbyB5YSB3YW50IGZvciBub3RoaW5nPw==');
test(base64.decode('V2hhdCBkbyB5YSB3YW50IGZvciBub3RoaW5nPw==')=='What do ya want for nothing?');

var data = '', i = 0;
do {
  data += String.fromCharCode(Math.round(Math.random() * 255));
} while(++i < 30000);
test(base64.decode(base64.encode(data)) == data);

sys.puts('tests passed successfully !');