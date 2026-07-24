const fs = require('fs');

const files = [
  'src/components/about/TimelineShowcase.tsx',
  'src/components/home/CapabilitiesOverview.tsx',
  'src/components/home/ClientsSection.tsx',
  'src/components/home/GallerySection.tsx',
  'src/components/home/Hero.tsx',
  'src/components/home/MissionVision.tsx',
  'src/components/home/QualityStrip.tsx',
  'src/components/layout/Footer.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove the const tCommon line
  content = content.replace(/const tCommon = useTranslation\('common'\);\r?\n?\s*/g, '');

  content = content.replace(/\{tCommon\('[^']+'\)\s*\|\|\s*('[^']+')\}/g, (match, p1) => {
    return p1;
  });

  content = content.replace(/\{tCommon\('[^']+'\)\s*\|\|\s*(\"[^\"]+\")\}/g, (match, p1) => {
    return p1;
  });

  content = content.replace(/tCommon\('[^']+'\)\s*\|\|\s*('[^']+')/g, '$1');
  content = content.replace(/tCommon\('[^']+'\)\s*\|\|\s*(\"[^\"]+\")/g, '$1');

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Undid tCommon translations in components!');
