# csvtojson-parser
# csvtojson-parser

[![Package Version](https://badgen.net/npm/v/csvtojson-parser)](https://npmjs.org/package/csvtojson-parser) [![Build Status](https://travis-ci.org/julien-f/csvtojson-parser.png?branch=master)](https://travis-ci.org/julien-f/csvtojson-parser) [![PackagePhobia](https://badgen.net/packagephobia/install/csvtojson-parser)](https://packagephobia.now.sh/result?p=csvtojson-parser) [![Latest Commit](https://badgen.net/github/last-commit/julien-f/csvtojson-parser)](https://github.com/julien-f/csvtojson-parser/commits/master)


> Stream and CLI to convert CSV to JSON.

## Install

Installation of the [npm package](https://npmjs.org/package/csvtojson-parser):

Install globally if you want to use the CLI:

```
npm install --global csvtojson-parser
```

Install locally if you want to use it as a library:

```
npm install --save csvtojson-parser
```

## Usage



### Stream

```javascript
var csvtojson-parser = require('csvtojson-parser');
var fs = require('fs');

fs.createReadStream('data.csv')
  .pipe(csvtojson-parser({
    // Defaults to comma.
    separator: ';'
  }))
  .pipe(fs.createWriteStream('data.json'));
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/csvtojson-parser/issues)
  you've encountered;
- fork and create a pull request.

## Note

Thanks to @twilson63 for letting me use the *csvtojson-parser* name on [npm](https://www.npmjs.org/).

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
