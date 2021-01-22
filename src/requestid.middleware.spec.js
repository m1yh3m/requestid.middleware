const lib = require('./requestid.middleware')

describe('requestID.middleware', () => {
  it('is a function of arity 2', () => {
    expect(typeof lib).toEqual('function')
    expect(lib.length).toBe(2)
  })
  it('lib() returns an object with function requestId', () => {
    const { requestid } = lib()
    expect(typeof requestid).toEqual('function')
    expect(requestid.length).toBe(3)
  })
  it('middleware works and calls next()', done => {
    const req = {}
    const res = null
    const next = () => {
      expect(req.ids.requestid).toEqual(req.headers['X-REQUEST-ID'])
      done()
    }
    lib().requestid(req, res, next)
  });

  [null, undefined].forEach(res => {
    it(`response can be ${res}`, done => {
      const req = {}
      const next = () => {
        expect(res).toBeFalsy()
        done()
      }
      lib().requestid(req, res, next)
    })
  })
})
