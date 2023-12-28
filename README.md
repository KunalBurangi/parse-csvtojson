# parse-csvtojson

[![Package Version](https://badgen.net/npm/v/parse-csvtojson)](https://npmjs.org/package/parse-csvtojson) [![Build Status](https://travis-ci.org/KunalBurangi/parse-csvtojson.png?branch=main)] [![PackagePhobia](https://badgen.net/packagephobia/install/parse-csvtojson)](https://packagephobia.now.sh/result?p=parse-csvtojson) [![Latest Commit](https://badgen.net/github/last-commit/kunalburangi/parse-csvtojson)](https://github.com/kunalburangi/parse-csvtojson/commits/main)


> Stream and CLI to convert CSV to JSON.

## Install

Installation of the [npm package](https://npmjs.org/package/parse-csvtojson):

Install globally if you want to use the CLI:

```
npm install --global parse-csvtojson
```

Install locally if you want to use it as a library:

```
npm install --save parse-csvtojson
```

## Usage
### Json Object
var csv2json = require("csvtojson-parser");
var fs = require("fs");
csv2json("example.csv", options, function (err, jsonData) {
    if (err) {
        console.error("Error:", err);
    } else {
        result = jsonData;
        console.log(JSON.stringify(jsonData, null, 2));
    }
});
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/kunalburangi/parse-csvtojson/issues)
  you've encountered;
- fork and create a pull request.

## Note

Thanks to @twilson63 for letting me use the *parse-csvtojson* name on [npm](https://www.npmjs.org/).

## License
