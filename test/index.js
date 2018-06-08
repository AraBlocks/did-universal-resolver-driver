const { Driver } = require('./')
const { test } = require('ava')

test("Driver#resolve should be a function", (t) => {
  t.plan(2)

  const driver = new Driver()

  t.true('function' == typeof Driver.prototype.resolve)
  t.true('function' == typeof driver.resolve)
})

test("Not implemented Driver#resolve throws TypeError", (t) => {
  t.plan(1)

  const driver = new Driver()

  t.throws(() => driver.resolve('did:test:1234'),
    TypeError, "Not implemented Driver#resolve() throws error")
})

test("Driver#resolve should configurable via constructor", (t) => {
  t.plan(1)

  const driver = new Driver({ resolve })

  function resolve() { }
  t.true(resolve == driver.resolve)
})

test("Driver#properties should be a function", (t) => {
  t.plan(2)

  const driver = new Driver()

  t.true('function' == typeof Driver.prototype.properties)
  t.true('function' == typeof driver.properties)
})

test("Not implemented Driver#properties throws TypeError", (t) => {
  t.plan(1)

  const driver = new Driver()

  t.throws(() => driver.properties(),
    TypeError, "Not implemented Driver#properties() throws error")
})

test("Driver#properties should configurable via constructor", (t) => {
  t.plan(1)

  const driver = new Driver({ properties })

  function properties() { }
  t.true(properties == driver.properties)
})
