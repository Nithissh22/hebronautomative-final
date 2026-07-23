import re

with open(r'd:\heronat\hebron-website\src\app\capabilities\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove spec-table icons
content = re.sub(r'<div className="spec-table__icon">.*?</div>\s*', '', content, flags=re.DOTALL)

# Remove equipment-box SVG checkmarks
content = re.sub(r'<svg viewBox="0 0 24 24" width="16" height="16" fill="var\(--brand-navy\)"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"></path></svg> ', '', content)

# Remove inline styles
content = content.replace(" style={{ paddingBottom: 'var(--space-12)' }}", "")
content = content.replace(" style={{ marginBottom: 'var(--space-2)' }}", "")

# Remove SVG arrows
content = re.sub(r' <svg viewBox="0 0 24 24" width="16" height="16" fill="none".*?</svg>', ' →', content)

with open(r'd:\heronat\hebron-website\src\app\capabilities\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned page.tsx")
