import { input } from "@inquirer/prompts";
import * as qr from 'qr-image';
import { createWriteStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';


const url = await input({ message: 'Type in your URL:'})

const pngStream = qr.image(url, { type: 'png' });

await new Promise((resolve, reject) => {
  const out = createWriteStream('qr_img.png');
  pngStream.pipe(out);
  out.on('finish', resolve);
  out.on('error', reject);
  pngStream.on('error', reject);
});

// Save the URL to a txt file
await writeFile('URL.txt', url, 'utf8');

console.log('✅ Saved qr_img.png and URL.txt');




/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
