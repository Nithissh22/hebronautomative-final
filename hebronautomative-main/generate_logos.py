import os
from PIL import Image

input_path = r"D:\images_2026-06-10_17-41-23\Hebron_Automotive_in_Hosur.jpg"
public_dir = r"d:\heronat\hebron-website\public"

# Load image
img = Image.open(input_path).convert("RGBA")

# 1. logo.png (Original as-is, just PNG)
img.save(os.path.join(public_dir, "logo.png"))

# 2. logo-dark.png (Transparent background)
# We make all pure white or near-white pixels transparent
datas = img.getdata()
new_data = []
for item in datas:
    # Change all white (also shades of whites)
    # to transparent
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)
img_transparent = Image.new("RGBA", img.size)
img_transparent.putdata(new_data)
img_transparent.save(os.path.join(public_dir, "logo-dark.png"))

# 3. favicon.png (32x32)
favicon = img_transparent.resize((32, 32), Image.Resampling.LANCZOS)
favicon.save(os.path.join(public_dir, "favicon.png"))
# Also save as .ico just in case
favicon.save(os.path.join(public_dir, "favicon.ico"), format='ICO')

# 4. apple-touch-icon.png (180x180)
apple = img.resize((180, 180), Image.Resampling.LANCZOS)
apple.save(os.path.join(public_dir, "apple-touch-icon.png"))

# 5. og-image.jpg (1200x630)
og = Image.new("RGB", (1200, 630), (255, 255, 255))
# Calculate position to center the logo
logo_w, logo_h = img.size
# resize logo to fit within something reasonable like 400x400
ratio = min(400/logo_w, 400/logo_h)
new_w, new_h = int(logo_w * ratio), int(logo_h * ratio)
logo_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
x = (1200 - new_w) // 2
y = (630 - new_h) // 2
# Paste using logo_resized (it's RGBA, so we can use it as mask or just paste it)
og.paste(logo_resized, (x, y))
og.save(os.path.join(public_dir, "og-image.jpg"))

print("All images generated successfully!")
