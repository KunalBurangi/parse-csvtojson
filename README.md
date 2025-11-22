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

### CLI

```bash
csv2json [file] [options]
```

**Options:**

*   `--separator [char]`: CSV separator (default: `,`)
*   `--dynamicTyping`: Parse dynamic values (default: `false`)
*   `--headers [list]`: Comma-separated list of headers
*   `--skipLines [num]`: Number of lines to skip
*   `--quote [char]`: Quote character (default: `"`)
*   `--fields [list]`: Comma-separated list of fields to include in output
*   `--ndjson`: Output as NDJSON (Newline Delimited JSON)
*   `--minified`: Output minified JSON
*   `--output, -o [file]`: Output file path
*   `--verbose`: Enable verbose logging

**Example:**

```bash
csv2json data.csv --output data.json --fields name,email --minified
```

### Library

```javascript
var csv2json = require("parse-csvtojson");

var options = {
    dynamicTyping: true,
    separator: ',',
    skipLines: 1,
    fields: ['name', 'age']
};

csv2json("example.csv", options, function (err, jsonData) {
    if (err) {
        console.error("Error:", err);
    } else {
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

ISC
