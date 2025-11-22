const assert = require('assert')
const csv2json = require('../index')
const path = require('path')

const { describe, it } = require('mocha')

describe('csv2json', () => {
  const options = {
    dynamicTyping: true,
    separator: ','
  }
  const exampleCsvPath = path.join(__dirname, '../example.csv')

  it('should convert CSV file to JSON', (done) => {
    const expectedData = [
      { name: 'John', age: 25, email: 'john@example.com' },
      { name: 'Jane', age: 30, email: 'jane@example.com' }
    ]
    csv2json(exampleCsvPath, options, function (err, jsonData) {
      if (err) return done(err)
      try {
        assert.deepStrictEqual(jsonData, expectedData)
        done()
      } catch (e) {
        done(e)
      }
    })
  })

  it('should handle errors for non-existent files', (done) => {
    csv2json('non-existent.csv', options, function (err, jsonData) {
      try {
        assert.ok(err)
        done()
      } catch (e) {
        done(e)
      }
    })
  })

  it('should filter fields', (done) => {
    const opts = { ...options, fields: ['name', 'age'] }
    const expectedData = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ]
    csv2json(exampleCsvPath, opts, function (err, jsonData) {
      if (err) return done(err)
      try {
        assert.deepStrictEqual(jsonData, expectedData)
        done()
      } catch (e) {
        done(e)
      }
    })
  })

  it('should skip lines', (done) => {
    // Create a temp file with comments
    const tempFile = path.join(__dirname, 'temp_skip.csv')
    const content = '# Comment\nname,age\nAlice,20'
    require('fs').writeFileSync(tempFile, content)

    const opts = { ...options, skipLines: 1 }
    const expectedData = [{ name: 'Alice', age: 20 }]

    csv2json(tempFile, opts, function (err, jsonData) {
      require('fs').unlinkSync(tempFile)
      if (err) return done(err)
      try {
        assert.deepStrictEqual(jsonData, expectedData)
        done()
      } catch (e) {
        done(e)
      }
    })
  })
})
