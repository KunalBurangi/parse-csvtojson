# parse-csvtojson

[![Package Version](https://badgen.net/npm/v/parse-csvtojson)](https://npmjs.org/package/parse-csvtojson) [![Build Status](https://travis-ci.org/julien-f/parse-csvtojson.png?branch=master)](https://travis-ci.org/julien-f/parse-csvtojson) [![PackagePhobia](https://badgen.net/packagephobia/install/parse-csvtojson)](https://packagephobia.now.sh/result?p=parse-csvtojson) [![Latest Commit](https://badgen.net/github/last-commit/julien-f/parse-csvtojson)](https://github.com/julien-f/parse-csvtojson/commits/master)


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



### Stream

```javascript
var parse-csvtojson = require('parse-csvtojson');
var fs = require('fs');

fs.createReadStream('data.csv')
  .pipe(parse-csvtojson({
    // Defaults to comma.
    separator: ';'
  }))
  .pipe(fs.createWriteStream('data.json'));
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/parse-csvtojson/issues)
  you've encountered;
- fork and create a pull request.

## Note

Thanks to @twilson63 for letting me use the *parse-csvtojson* name on [npm](https://www.npmjs.org/).

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
