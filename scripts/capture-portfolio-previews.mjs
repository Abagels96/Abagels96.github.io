/**
 * Visits each portfolio item's liveUrl and saves a viewport screenshot to
 * public/projects/{id}-preview.png. Run after changing URLs or when you want
 * fresher previews: npm run capture:previews
 */
import { mkdir } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { chromium } from 'playwright'
import { portfolioItems } from '../src/content.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/projects')

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
})
const page = await context.newPage()

for (const item of portfolioItems) {
  if (!item.liveUrl) continue
  const outPath = join(outDir, `${item.id}-preview.png`)
  try {
    await page.goto(item.liveUrl, { waitUntil: 'load', timeout: 60_000 })
    await new Promise((r) => setTimeout(r, 1500))
    await page.screenshot({ path: outPath, type: 'png', fullPage: false })
    console.log(`OK  ${item.id}`)
  } catch (err) {
    console.error(`FAIL ${item.id}:`, err.message)
  }
}

await browser.close()
