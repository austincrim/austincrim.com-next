const puppeteer = require('puppeteer-core')
const chrome = require('chrome-aws-lambda')
const { PrismaClient } = require('@prisma/client')
const fsSync = require('fs')
const fs = require('fs/promises')
const path = require('path')
const prisma = new PrismaClient()

let browser
async function main() {
  browser = await puppeteer.launch({
    args: chrome.args,
    executablePath:
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: chrome.headless
  })

  let slugs = await prisma.post.findMany({
    select: {
      slug: true
    },
    where: {
      published: true
    }
  })

  slugs.forEach(async ({ slug }) => {
    let page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 627 })
    console.log('navigating...')
    await page.goto(`http://localhost:3000/og/${slug}`, {
      waitUntil: 'domcontentloaded'
    })
    let buffer = await page.screenshot({
      type: 'png',
      clip: { x: 0, y: 0, width: 1200, height: 630 }
    })

    let imagePath = path.join(__dirname, 'public', 'og', `${slug}.png`)

    if (fsSync.existsSync(imagePath)) {
      console.log(`skipped!`)
    } else {
      if (buffer) {
        await fs.writeFile(imagePath, buffer)
        console.log(`wrote ${imagePath}`)
      }
    }
    await page.close()
  })
}

main().then(() => {
  console.log('done')
})
