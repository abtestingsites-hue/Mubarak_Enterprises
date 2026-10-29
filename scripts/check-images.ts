import fs from 'fs';
import path from 'path';
import { PRODUCTS, CATEGORIES } from '../src/data/products';

async function checkImages() {
  console.log('--- CHECKING IMAGE ACCESSIBILITY & LOCAL ASSETS ---');
  
  const allUrls = new Set<string>();
  CATEGORIES.forEach(c => allUrls.add(c.imageUrl));
  PRODUCTS.forEach(p => allUrls.add(p.imageUrl));

  console.log(`Checking ${allUrls.size} unique image references...`);

  let successCount = 0;
  let failureCount = 0;

  for (const url of allUrls) {
    if (url.startsWith('/')) {
      const localFilePath = path.join(path.resolve('public'), url);
      if (fs.existsSync(localFilePath) && fs.statSync(localFilePath).size > 0) {
        successCount++;
        const sizeKb = (fs.statSync(localFilePath).size / 1024).toFixed(1);
        console.log(`[LOCAL OK ${sizeKb} KB] ${url}`);
      } else {
        failureCount++;
        console.error(`[LOCAL FAIL Missing] ${localFilePath}`);
      }
    } else {
      try {
        const res = await fetch(url, { method: 'HEAD' });
        if (res.ok) {
          successCount++;
          console.log(`[REMOTE OK ${res.status}] ${url.substring(0, 65)}...`);
        } else {
          failureCount++;
          console.warn(`[REMOTE WARN ${res.status}] ${url}`);
        }
      } catch (err: unknown) {
        failureCount++;
        console.error(`[REMOTE ERROR] ${url}: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  }

  console.log(`\nImage Check Result: ${successCount} verified, ${failureCount} failed.`);
}

checkImages();
