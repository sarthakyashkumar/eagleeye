import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const screenshotsDir = "/Users/sarthakyashkumar/Downloads/EagleEye/screenshots";

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function run() {
  console.log("Launching Chrome...");
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  // Pre-seed sessionStorage to skip boot sequence for steady screenshotting
  await page.evaluateOnNewDocument(() => {
    sessionStorage.setItem("eagleeye_booted", "true");
  });

  // 1. Desktop 1440x900
  console.log("Navigating to http://localhost:3000 (Desktop 1440px)...");
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1200));

  // Hero
  console.log("Capturing Desktop Hero...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(screenshotsDir, "desktop_hero.png") });

  // Manifesto
  console.log("Capturing Desktop Manifesto...");
  await page.evaluate(() => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, "desktop_manifesto.png") });

  // Tracks Bento Grid
  console.log("Capturing Desktop Tracks...");
  await page.evaluate(() => {
    const el = document.getElementById("tracks");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, "desktop_tracks.png") });

  // Prizes Vault
  console.log("Capturing Desktop Prizes...");
  await page.evaluate(() => {
    const el = document.getElementById("prizes");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, "desktop_prizes.png") });

  // Contact Cards
  console.log("Capturing Desktop Contact...");
  await page.evaluate(() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, "desktop_contact.png") });

  // Footer & Wordmark
  console.log("Capturing Desktop Footer...");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, "desktop_footer.png") });

  // 2. Mobile 375x812 (iPhone screen)
  console.log("Setting Mobile Viewport 375x812...");
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1000));

  console.log("Capturing Mobile Hero...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(screenshotsDir, "mobile_hero.png") });

  console.log("Capturing Mobile Tracks...");
  await page.evaluate(() => {
    const el = document.getElementById("tracks");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, "mobile_tracks.png") });

  console.log("Capturing Mobile Contact...");
  await page.evaluate(() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, "mobile_contact.png") });

  await browser.close();
  console.log("All screenshots successfully captured!");
}

run().catch((err) => {
  console.error("Test script failed:", err);
  process.exit(1);
});
