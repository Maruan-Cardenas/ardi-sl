import fs from 'fs';

const SITEMAP_URL = "https://www.ardi-sl.com/sitemap.xml";

async function fetchProducts() {
  console.log("Fetching sitemap...");
  const sitemapRes = await fetch(SITEMAP_URL);
  const sitemapText = await sitemapRes.text();
  
  const urlRegex = /<loc>(https:\/\/www\.ardi-sl\.com\/tienda\/[^<]+-p\d+)<\/loc>/g;
  let match;
  const urls = [];
  while ((match = urlRegex.exec(sitemapText)) !== null) {
    urls.push(match[1]);
  }
  
  console.log(`Found ${urls.length} products.`);
  
  const products = [];
  
  for (let i = 0; i < urls.length; i += 10) {
    const batch = urls.slice(i, i + 10);
    const promises = batch.map(async (url) => {
      try {
        const res = await fetch(url);
        const html = await res.text();
        
        const titleMatch = html.match(/<meta property="og:title"\s+content="([^"]+)"/i) || html.match(/<title>([^<]+)<\/title>/i);
        const descMatch = html.match(/<meta property="og:description"\s+content="([^"]+)"/i) || html.match(/<meta name="description"\s+content="([^"]+)"/i);
        const imgMatch = html.match(/<meta property="og:image"\s+content="([^"]+)"/i);
        
        if (titleMatch) {
            let name = titleMatch[1].replace(' - ARDI S.L.', '').trim();
            // Fallback for image
            let image = imgMatch ? imgMatch[1] : 'https://www.ardi-sl.com/assets/img/default-product.png';
            return {
                id: url.split('/').pop(),
                name: name,
                description: descMatch ? descMatch[1] : "",
                image: image,
                url: url
            }
        }
      } catch (e) {
          console.error(`Failed to fetch ${url}`, e);
      }
      return null;
    });
    
    const results = await Promise.all(promises);
    products.push(...results.filter(p => p !== null));
    console.log(`Fetched ${Math.min(i + 10, urls.length)} / ${urls.length}`);
  }
  
  let out = `export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: string;
  badge: string;
  specs: { label: string; value: string; }[];
  features: string[];
  options: string[];
  highlight?: boolean;
}

export const PRODUCT_CATEGORIES = [
  { id: "TIENDA", label: "Tienda Online" }
];

export const PRODUCTS: Product[] = [
`;
  
  for (const p of products) {
      out += `  {
    id: ${JSON.stringify(p.id)},
    name: ${JSON.stringify(p.name)},
    shortDescription: ${JSON.stringify(p.description.substring(0, 150) + (p.description.length > 150 ? "..." : ""))},
    fullDescription: ${JSON.stringify(p.description)},
    category: "TIENDA",
    image: ${JSON.stringify(p.image)},
    badge: "Tienda",
    specs: [],
    features: [],
    options: []
  },\n`;
  }
  out += `];\n`;
  
  fs.writeFileSync('src/data/products.ts', out);
  console.log("Written to src/data/products.ts");
}

fetchProducts();
