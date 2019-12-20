function setup (randomBytesLib, REQUEST_ID_HEADER_KEY) {
  randomBytesLib = randomBytesLib || require('@m1yh3m/random.bytes')
  REQUEST_ID_HEADER_KEY = REQUEST_ID_HEADER_KEY || 'X-REQUEST-ID'

  const { generate } = randomBytesLib()

  const requestid = (request, response, next) => {
    request.ids = request.ids || {}
    request.headers = request.headers || {}
    request.ids.requestid = request.headers[REQUEST_ID_HEADER_KEY] = request.ids.requestid || generate().hex
    return next()
  }
  return {
    requestid
  }
}

module.exports = setup
