import fs from 'fs';

const productsFile = 'src/data/products.ts';
let content = fs.readFileSync(productsFile, 'utf-8');

const loremShort = "Este equipo ha sido diseñado con los más altos estándares de calidad en acero inoxidable, ofreciendo un rendimiento excepcional y durabilidad para el sector lácteo y alimentario.";
const loremFull = "Nuestros equipos están fabricados a medida en acero inoxidable AISI 304/316L, garantizando la máxima higiene y eficiencia en sus procesos de producción. Diseñados para adaptarse a las necesidades específicas de cada cliente, combinan tecnología avanzada con una construcción robusta que asegura años de funcionamiento ininterrumpido y un mantenimiento sencillo.";

content = content.replace(/shortDescription:\s*""/g, `shortDescription: "${loremShort}"`);
content = content.replace(/fullDescription:\s*""/g, `fullDescription: "${loremFull}"`);

fs.writeFileSync(productsFile, content);
console.log("Lorem ipsum añadido a las descripciones.");
