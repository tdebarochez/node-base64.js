Readme
------

This lib expose two useful functions :

    base64.encode();
    base64.decode();

Example
-------

    var base64 = require('./base64'), sys = require('sys');
    sys.puts(base64.encode("ABCD")); // -> "QUJDRA=="
    sys.puts(base64.decode("QUJDRA==")); // -> "ABCD"

Tests
-----

To run tests, juste execute :

    $ node test.js

License
-------

lepote is is licensed under the terms of the MIT License, see the included LICENSE file.