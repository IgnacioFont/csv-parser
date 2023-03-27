/* eslint-disable no-unused-expressions */

const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const axios = require('axios')

const fetchData = require('../utils/fetchData')

describe('fetchData function', () => {
  const baseHeaders = { 'Content-Type': 'application/json' }
  const endpoint = 'https://mock.com/secret/files'

  afterEach(() => {
    sinon.restore()
  })

  it('should call axios.get with the correct arguments', async () => {
    const axiosStub = sinon.stub(axios, 'get')
    const expectedResponse = { data: 'response data' }
    axiosStub.resolves(expectedResponse)

    const response = await fetchData(endpoint, baseHeaders)

    expect(axiosStub.calledOnceWithExactly(endpoint, { headers: baseHeaders }))
      .to.be.true
    expect(response).to.equal(expectedResponse)
  })

  it('should throw an error when endpoint is invalid', async () => {
    try {
      await fetchData('invalid-endpoint')
      expect.fail('Expected an error to be thrown')
    } catch (e) {
      expect(e).to.be.an.instanceOf(Error)
    }
  })
})
