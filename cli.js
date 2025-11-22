#!/usr/bin/env node
const minimist = require('minimist')
const fs = require('fs')
const csv2json = require('./index')
const pump = require('pump')

const args = minimist(process.argv.slice(2))

if (args.help || args.h) {
    console.log('Usage: csv2json [file] [options]')
    console.log('  --separator [char]    CSV separator (default: ,)')
    console.log('  --dynamicTyping       Parse dynamic values (default: false)')
    console.log('  --headers [list]      Comma-separated list of headers')
    console.log('  --skipLines [num]     Number of lines to skip')
    console.log('  --quote [char]        Quote character (default: ")')
    console.log('  --fields [list]       Comma-separated list of fields to include')
    console.log('  --ndjson              Output as NDJSON')
    console.log('  --minified            Output minified JSON')
    console.log('  --output, -o [file]   Output file path')
    console.log('  --verbose             Enable verbose logging')
    console.log('  --help, -h            Show this help message')
    process.exit(0)
}

const filePath = args._[0]
const options = {
    separator: args.separator || ',',
    dynamicTyping: args.dynamicTyping || false,
    headers: args.headers ? args.headers.split(',') : undefined,
    skipLines: args.skipLines ? parseInt(args.skipLines, 10) : 0,
    quote: args.quote || '"',
    fields: args.fields ? args.fields.split(',') : undefined
}

const verbose = args.verbose || false
const outputFile = args.output || args.o
const ndjson = args.ndjson || false
const minified = args.minified || false

if (verbose) {
    console.error('Options:', options)
    console.error('Output File:', outputFile)
    console.error('NDJSON:', ndjson)
    console.error('Minified:', minified)
}

if (filePath) {
    csv2json(filePath, options, (err, data) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }

        let output = ''
        if (ndjson) {
            output = data.map(item => JSON.stringify(item)).join('\n')
        } else {
            output = JSON.stringify(data, null, minified ? 0 : 2)
        }

        if (outputFile) {
            fs.writeFile(outputFile, output, (writeErr) => {
                if (writeErr) {
                    console.error('Error writing to file:', writeErr)
                    process.exit(1)
                }
                if (verbose) console.error(`Successfully wrote to ${outputFile}`)
            })
        } else {
            console.log(output)
        }
    })
} else {
    console.error('Error: No input file provided.')
    console.log('Usage: csv2json [file] [options]')
    process.exit(1)
}
