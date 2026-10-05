import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

function getCategory(name) {
  const lower = name.toLowerCase();
  if (lower.includes('cuba') || lower.includes('pasteri') || lower.includes('cuaj') || lower.includes('batidor') || lower.includes('lira') || lower.includes('yogur') || lower.includes('elaboraci')) {
    return "Elaboración";
  }
  if (lower.includes('prensa') || lower.includes('arc') || lower.includes('desuer') || lower.includes('chapa') || lower.includes('molde') || lower.includes('prensado')) {
    return "Prensado & Desuerado";
  }
  if (lower.includes('lavad') || lower.includes('cip') || lower.includes('limp') || lower.includes('sanidad')) {
    return "Lavado & Sanidad";
  }
  if (lower.includes('tanque') || lower.includes('dep') || lower.includes('distribuidor') || lower.includes('recep') || lower.includes('bomba') || lower.includes('almacenamiento')) {
    return "Almacenamiento & Distribución";
  }
  if (lower.includes('mesa') || lower.includes('plataforma') || lower.includes('carro') || lower.includes('cesto') || lower.includes('gu') || lower.includes('embolsadora')) {
    return "Equipamiento Adicional";
  }
  return "Proyectos Especiales";
}

let newContent = content.replace(/category: "TIENDA"/g, (match, offset, str) => {
    const substr = str.substring(offset - 250, offset);
    const nameMatch = substr.match(/name: "([^"]+)"/);
    if (nameMatch) {
        const cat = getCategory(nameMatch[1]);
        return `category: "${cat}"`;
    }
    return match;
});

newContent = newContent.replace(/export const PRODUCT_CATEGORIES = \[[\s\S]*?\];/, `export const PRODUCT_CATEGORIES = [
  { id: "Elaboración", label: "Elaboración" },
  { id: "Prensado & Desuerado", label: "Prensado & Desuerado" },
  { id: "Lavado & Sanidad", label: "Lavado & Sanidad" },
  { id: "Almacenamiento & Distribución", label: "Almacenamiento & Distribución" },
  { id: "Equipamiento Adicional", label: "Equipamiento Adicional" },
  { id: "Proyectos Especiales", label: "Proyectos Especiales" }
];`);

fs.writeFileSync('src/data/products.ts', newContent);
console.log("Categories updated.");
