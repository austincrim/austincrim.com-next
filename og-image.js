const puppeteer = require('puppeteer-core')
const chrome = require('chrome-aws-lambda')
const { PrismaClient } = require('@prisma/client')
const fs = require('fs/promises')
const path = require('path')
const prisma = new PrismaClient()

async function main() {
  let browser = await puppeteer.launch({
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
      type: 'webp',
      clip: { x: 0, y: 0, width: 1200, height: 630 }
    })

    try {
      await fs.stat(path.join(__dirname, 'public', 'og', slug))
      console.log(`skipped!`)
    } catch (e) {
      if (buffer) {
        await fs.writeFile(
          path.join(__dirname, 'public', 'og', `${slug}.webp`),
          buffer
        )
        console.log(`wrote ${slug}.webp`)
      }
    }

    await page.close()
  })
}

main().then(() => console.log('done'))
