const path = require('path')

const isCorrectLength = (line) => {
  const headers = ['file', 'text', 'number', 'hex']
  return line.length === headers.length
}
const isFile = (str) =>
  path.extname(str) !== '' && path.extname(str) !== '.' && !str.endsWith('/')
const isText = (value) => typeof value === 'string'
const isNumber = (value) => !isNaN(value)
const isHex = (value) => !isNaN(parseInt(value, 16)) && value.length === 32

const isValidLine = (line) => {
  const [file, text, number, hex] = line
  return (
    isCorrectLength(line) &&
    isFile(file) &&
    isText(text) &&
    isNumber(number) &&
    isHex(hex)
  )
}

module.exports = isValidLine
