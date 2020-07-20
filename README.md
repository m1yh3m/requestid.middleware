# @m1yh3m/requestid.middleware

node module

```javascript

const requestid = require('@m1yh3m/requestid.middleware')

// express is require('express') or ()
express().use(requestid)


// after adding the middleware request object looks like:
req
{
  ids: {
    requestid: '29959781589ce2a511392d1f069d77a7f3dbeed718df9d9696bd512dccd77df0'
  },
  headers: {
    'X-REQUEST-ID': '29959781589ce2a511392d1f069d77a7f3dbeed718df9d9696bd512dccd77df0'
  }
}

```

The default branch is `dev`.

