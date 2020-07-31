const fs = require('fs')
const path = require('path')
const { default: caz, inject } = require('caz')

const template = path.join(__dirname, '..')
const project = path.join(__dirname, '..', 'dist')

beforeAll(async () => {
  jest.spyOn(console, 'log').mockImplementation()
  jest.spyOn(console, 'clear').mockImplementation()
})

afterAll(async () => {
  jest.clearAllMocks()
})

test('minimal', async () => {
  inject([
    'foo',
    '0.1.0',
    'description',
    'zce',
    'w@zce.me',
    'https://zce.me',
    'zce',
    'tmpl',
    [],
    'message',
    false
  ])
  await caz(template, project, { force: true })
  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(path.join(project, 'README.md'))).toBe(true)
  fs.rmdirSync(project, { recursive: true })
})

test('maximal', async () => {
  // TODO: maximal tests
})
