const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const replacements = [
  { from: /jarro premium\./g, to: 'jarro.' },
  { from: /Cerámica premium AAA/g, to: 'Cerámica AAA' },
  { from: /jarro negro premium/g, to: 'jarro negro' },
  { from: /Aluminio premium/g, to: 'Aluminio de calidad' },
  { from: /diseño premium\./g, to: 'diseño.' },
  { from: /Confort premium y/g, to: 'Confort y' },
  { from: /100% Algodón premium/g, to: '100% Algodón' },
  { from: /100% algodón premium/g, to: '100% algodón' },
  { from: /Algodón premium/g, to: 'Algodón' },
  { from: /✓ Premium/g, to: '✓ Alta calidad' },
  { from: /Calidad premium para/g, to: 'Alta calidad para' },
  { from: /detalle premium para/g, to: 'detalle exclusivo para' },
  { from: /Metal premium/g, to: 'Metal' }
];

replacements.forEach(r => {
  content = content.replace(r.from, r.to);
});

// Extra check to catch any other instances safely
content = content.replace(/premium/gi, 'de calidad');

fs.writeFileSync('index.html', content);
console.log('Removed premium words.');
