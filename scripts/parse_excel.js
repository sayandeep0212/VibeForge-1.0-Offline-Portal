const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', 'Team Wise Problem Statement.xlsx');
const workbook = XLSX.readFile(filePath);

for (const sheetName of workbook.SheetNames) {
  console.log(`\n=== Sheet: ${sheetName} ===`);
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  for (let i = 0; i < Math.min(data.length, 50); i++) {
    console.log(JSON.stringify(data[i]));
  }
}
