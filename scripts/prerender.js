import fs from "fs/promises";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist");
const distSsrDir = path.resolve(__dirname, "../dist-ssr");

const template = await fs.readFile(path.join(distDir, "index.html"), "utf-8");
const serverEntry = pathToFileURL(path.join(distSsrDir, "entry-server.js")).href;

const { render } = await import(serverEntry);

const stylesheetLinkRegex = /<link\s+rel="stylesheet"[^>]*>/i;

const enhanceStylesheetLoading = (html) => {
  const match = html.match(stylesheetLinkRegex);

  if (!match) {
    return html;
  }

  const originalTag = match[0];
  const attrs = originalTag
    .replace(/<link\s+rel="stylesheet"/i, "")
    .replace(/>$/, "");

  const preloadTag = `<link rel="preload"${attrs} as="style">`;
  const asyncTag = `<link rel="stylesheet"${attrs} media="print" onload="this.media='all'">`;
  const noscriptTag = `<noscript>${originalTag}</noscript>`;

  return html.replace(originalTag, `${preloadTag}\n    ${asyncTag}\n    ${noscriptTag}`);
};

const routesToPrerender = [
  { url: "/", file: "index.html" },
  { url: "/404", file: "404.html" },
];

for (const route of routesToPrerender) {
  const appHtml = await render(route.url);
  const withAppHtml = template.replace("<div id=\"root\"></div>", `<div id="root">${appHtml}</div>`);
  const html = enhanceStylesheetLoading(withAppHtml);
  const outputPath = path.join(distDir, route.file);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, "utf-8");
  console.log(`Pre-rendered ${route.url} -> ${path.relative(distDir, outputPath)}`);
}

await fs.rm(distSsrDir, { recursive: true, force: true });
