const { baseUrl } = require('../config.js')
const fetchData = require('./fetchData')
const isValidLine = require('./isValidLine')

const formatCSVList = async (csvs) => {
  const validCSVs = (
    await Promise.allSettled(
      csvs.map(async (file) => {
        const { data } = await fetchData(`${baseUrl}/v1/secret/file/${file}`)

        const formattedLines = {
          file,
          lines: data
            .split('\n')
            .map((line) => line.split(','))
            .filter(isValidLine)
            .map(([_, text, number, hex]) => ({ text, number, hex }))
        }
        return formattedLines
      })
    )
  )
    .filter(
      (promise) =>
        promise.status === 'fulfilled' && promise.value.lines.length > 0
    )
    .flatMap((promise) => promise.value)

  return validCSVs
}

module.exports = formatCSVList
