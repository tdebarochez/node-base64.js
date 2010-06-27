var cb64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    cbi64 = {};
for (var i in cb64) {
  if (!isNaN(i)) {
    cbi64[cb64[i]] = i;
  }
}

function encode(data) {
  var output = '', l = data.length;
  do {
    var char1 = data.charCodeAt(data.length - l) >> 2,
        char2 = (data.charCodeAt(data.length - l) & 0x03) << 4 | (data.charCodeAt(data.length - l + 1) & 0xf0) >> 4,
        char3 = (data.charCodeAt(data.length - l + 1) & 0x0f) << 2 | (data.charCodeAt(data.length - l + 2) & 0xc0) >> 6,
        char4 = data.charCodeAt(data.length - l + 2) & 0x3f;
    output += cb64[char1] + cb64[char2];
    if (l > 3) {
      output += cb64[char3];
      output += cb64[char4];
      l -= 2;
    }
    else {
      output += --l > 0 ? cb64[char3] : '=';
      output += --l > 0 ? cb64[char4] : '=';
    }
  } while (--l > 0);
  return output;
}

function decode(str) {
  var output = '', str = str.replace(/([\n\r]+)/gi, ''), l = str.length;
  if (l < 4 || l%4 !== 0) {
    return undefined;
  }
  var i = 0;
  do {
    var char1 = cbi64[str[str.length - l]],
        char2 = cbi64[str[str.length - l + 1]],
        char3 = cbi64[str[str.length - l + 2]],
        char4 = cbi64[str[str.length - l + 3]];
    char1 = char1 > 0 ? char1 : 0;
    char2 = char2 > 0 ? char2 : 0;
    char3 = char3 > 0 ? char3 : 0;
    char4 = char4 > 0 ? char4 : 0;
    output += String.fromCharCode((char1 << 2 | char2 >> 4) & 0xff);
    if (l > 4 || char2 > 0 && char3 > 0) {
      output += String.fromCharCode((char2 << 4 | char3 >> 2) & 0xff);
    }
    if (l > 4 || char3 > 0 && char4 > 0) {
      output += String.fromCharCode((((char3 << 6) & 0xc0) | char4) & 0xff);
    }
  } while ((l -= 4) > 0);
  return output;
}

exports.decode = decode;
exports.encode = encode;

