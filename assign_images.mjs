import fs from 'fs';
import path from 'path';

const imagesDir = 'public/images/CUBAS';
const productsFile = 'src/data/products.ts';

const files = fs.readdirSync(imagesDir);

// Group images by prefix
const imageGroups = {};
for (const file of files) {
    if (!file.endsWith('.jpg') && !file.endsWith('.png')) continue;
    const match = file.match(/^(.+)-(\d+)\.(jpg|png)$/);
    if (match) {
        const prefix = match[1];
        if (!imageGroups[prefix]) imageGroups[prefix] = [];
        imageGroups[prefix].push(`/images/CUBAS/${file}`);
    } else {
        const prefix = file.replace(/\.(jpg|png)$/, '');
        if (!imageGroups[prefix]) imageGroups[prefix] = [];
        imageGroups[prefix].push(`/images/CUBAS/${file}`);
    }
}

// Sort images so -1 is first
for (const key in imageGroups) {
    imageGroups[key].sort((a, b) => {
        const numA = parseInt((a.match(/-(\d+)\./) || [0, '0'])[1]);
        const numB = parseInt((b.match(/-(\d+)\./) || [0, '0'])[1]);
        return numA - numB;
    });
}

let content = fs.readFileSync(productsFile, 'utf-8');

// Ensure the interface has `images?: string[]`
if (!content.includes('images?: string[]')) {
    content = content.replace('highlight?: boolean;', 'highlight?: boolean;\n  images?: string[];');
}

// Normalize strings for comparison
const normalize = (s) => s.toUpperCase()
    .replace(/Á/g, 'A')
    .replace(/É/g, 'E')
    .replace(/Í/g, 'I')
    .replace(/Ó/g, 'O')
    .replace(/Ú/g, 'U')
    .replace(/,/g, '')
    .replace(/\s+/g, '-')
    .replace(/\?/g, 'A'); // To handle encoding issues in names

const prefixes = Object.keys(imageGroups);

let newContent = content.replace(/{\s*id:\s*"[^"]+",\s*name:\s*"([^"]+)"[\s\S]*?},\n/g, (match, name) => {
    const normName = normalize(name);
    // Find matching prefix
    let bestMatch = null;
    for (const prefix of prefixes) {
        // e.g. "CUBA-DOBLECERO-SEMICERRADA"
        // name from TS could be "CUBA DOBLECERO SEMICERRADA" -> "CUBA-DOBLECERO-SEMICERRADA"
        // Also handle "LIRAS-CUBA-DOBLECERO-SIMCERRADA-Y-CERRADA" vs "LIRAS , CUBA DOBLECERO SEMICERRADA Y CERRADA"
        let normPrefix = prefix.toUpperCase().replace(/SIMCERRADA/g, 'SEMICERRADA'); 
        if (normName === normPrefix || normName.includes(normPrefix) || normPrefix.includes(normName)) {
            bestMatch = prefix;
            break;
        }
    }

    if (bestMatch) {
        const imgs = imageGroups[bestMatch];
        const mainImg = imgs[0];
        
        let updated = match.replace(/image:\s*"[^"]*",/, `image: "${mainImg}",`);
        if (updated.includes('images: [')) {
            updated = updated.replace(/images:\s*\[.*?\]/, `images: ${JSON.stringify(imgs)}`);
        } else {
            updated = updated.replace(/},\n$/, `  images: ${JSON.stringify(imgs)}\n  },\n`);
        }
        return updated;
    }

    return match;
});

fs.writeFileSync(productsFile, newContent);
console.log("Images assigned to products.");
