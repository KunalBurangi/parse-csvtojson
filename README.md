# cvs-2-json# csv-2-json

[![Package Version](https://badgen.net/npm/v/csv-2-json)](https://npmjs.org/package/csv-2-json) [![Build Status](https://travis-ci.org/julien-f/csv-2-json.png?branch=master)](https://travis-ci.org/julien-f/csv-2-json) [![PackagePhobia](https://badgen.net/packagephobia/install/csv-2-json)](https://packagephobia.now.sh/result?p=csv-2-json) [![Latest Commit](https://badgen.net/github/last-commit/julien-f/csv-2-json)](https://github.com/julien-f/csv-2-json/commits/master)


> Stream and CLI to convert CSV to JSON.

## Install

Installation of the [npm package](https://npmjs.org/package/csv-2-json):

Install globally if you want to use the CLI:

```
npm install --global csv-2-json
```

Install locally if you want to use it as a library:

```
npm install --save csv-2-json
```

## Usage



### Stream

```javascript
var csv-2-json = require('csv-2-json');
var fs = require('fs');

fs.createReadStream('data.csv')
  .pipe(csv-2-json({
    // Defaults to comma.
    separator: ';'
  }))
  .pipe(fs.createWriteStream('data.json'));
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/csv-2-json/issues)
  you've encountered;
- fork and create a pull request.

## Note

Thanks to @twilson63 for letting me use the *csv-2-json* name on [npm](https://www.npmjs.org/).

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
