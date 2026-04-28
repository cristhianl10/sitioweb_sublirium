const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const regex = /data-name="([^"]+)"[\s\S]*?data-desc="([^"]+)"/g;
let match;
let out='';
while ((match = regex.exec(content)) !== null) {
  out += match[1] + ' ||| ' + match[2] + '\n';
}
fs.writeFileSync('products.txt', out);
