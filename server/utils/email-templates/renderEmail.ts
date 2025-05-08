import { renderToString } from 'vue/server-renderer';
import { createSSRApp } from 'vue';
import ProductEmail from './ProductEmail';
import fs from 'fs';
import path from 'path';

export async function renderProductEmail(props: {
  userEmail: string;
  productDetails: {
    customerFirstName: string;
    downloadUrl: string;
    downloadAttempts: number;
    downloadDays: number;
    supportEmail: string;
    moreTemplatesUrl: string[];
  };
  productLinks: string[];
}) {
  const app = createSSRApp(ProductEmail, props);
  const html = await renderToString(app);

  // Read the CSS file
  // const cssPath = path.join(__dirname, 'ProductEmail.css');
  // const css = fs.readFileSync(cssPath, 'utf-8');

  // Wrap the rendered component in a proper HTML document with styles
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Product Details</title>
        <style>
          body {
            background-color: #f6f9fc;
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
          }
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;
} 