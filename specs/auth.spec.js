import playwright from 'playwright'

describe('User authorization', () => {
  let browser, context, page
  beforeEach(async () => {
    browser = await playwright.chromium.launch({
      headless: true,
      slowMo: 250,
    })
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://rahulshettyacademy.com/client')
  })
  afterEach(async () => {
    await page.screenshot({ path: 'screenshot.png' })
    await page.close()
    await browser.close()
  })
  it('User login with correct email and password', async () => {
    await page.click('#userEmail')
    await page.fill('#userEmail', 'evgenia.rud@yojji.io')
    await page.click('#userPassword')
    await page.fill('#userPassword', 'Qwerty123@')
    await page.click('#login')
  })
})
