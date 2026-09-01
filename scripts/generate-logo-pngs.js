// Script: scripts/generate-logo-pngs.js
// Usage:
// 1) Install sharp: `npm install --save-dev sharp`
// 2) Run: `node scripts/generate-logo-pngs.js`
// The script will read SVGs in /public and generate PNG fallbacks at 1x, 2x, 3x.

const fs = require('fs');
const path = require('path');

async function main(){
  try{
    const sharp = require('sharp');
    const publicDir = path.join(__dirname, '..', 'public');
    const logos = [
      { src: 'uvix-logo.svg', name: 'uvix-logo' },
      { src: 'uvix-logo-compact.svg', name: 'uvix-logo-compact' },
      { src: 'uvix-logo-stacked.svg', name: 'uvix-logo-stacked' },
      { src: 'uvix-logo-dark.svg', name: 'uvix-logo-dark' },
    ];

    for (const l of logos){
      const svgPath = path.join(publicDir, l.src);
      if (!fs.existsSync(svgPath)){
        console.warn('Skipping missing', svgPath);
        continue;
      }
      const svgBuffer = fs.readFileSync(svgPath);
      // determine width from viewBox if present, fallback widths
      const svgText = svgBuffer.toString();
      const viewBoxMatch = svgText.match(/viewBox=\"(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\"/);
      let baseW = 600;
      if (viewBoxMatch) baseW = parseInt(viewBoxMatch[3],10);
      const sizes = [1,2,3];
      for (const s of sizes){
        const outPath = path.join(publicDir, `${l.name}${s===1?'.png':`@${s}x.png`}`);
        await sharp(svgBuffer).png().resize(Math.round(baseW*s)).toFile(outPath);
        console.log('Wrote', outPath);
      }
    }
  }catch(err){
    console.error('Error: ensure sharp is installed: npm install --save-dev sharp');
    console.error(err);
    process.exit(1);
  }
}

main();
