const fs = require('fs');
const path = require('path');

async function main() {
  const mod = await import('pdf-parse');
  console.log('Module keys:', Object.keys(mod));
  const pdfParse = mod.default || mod.pdfParse || mod;
  console.log('Type:', typeof pdfParse);
  
  const filePath = path.join(__dirname, '..', 'public', 'VibeForge_1.0_Offline_Problem_Statements.pdf');
  const dataBuffer = fs.readFileSync(filePath);
  
  if (typeof pdfParse === 'function') {
    const data = await pdfParse(dataBuffer);
    console.log(data.text);
  } else if (typeof pdfParse.parse === 'function') {
    const data = await pdfParse.parse(dataBuffer);
    console.log(data.text);
  } else {
    // Try all exported functions
    for (const [key, val] of Object.entries(mod)) {
      if (typeof val === 'function') {
        console.log(`Trying ${key}...`);
        try {
          const data = await val(dataBuffer);
          console.log(data.text || data);
          break;
        } catch(e) {
          console.log(`${key} failed:`, e.message);
        }
      }
    }
  }
}

main().catch(console.error);
