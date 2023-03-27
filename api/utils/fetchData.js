const axios = require('axios')
const { baseHeaders } = require('../config.js')

const fetchData = async (endpoint, headers = baseHeaders) => {
  try {
    const response = await axios.get(endpoint, { headers })
    return response
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = fetchData
