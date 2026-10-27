"""Convert local raster assets to WebP and update HTML references (Pillow required)."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
for source in (ROOT / 'assets').iterdir():
    if source.suffix.lower() not in {'.png', '.jpg', '.jpeg'}:
        continue
    destination = source.with_suffix('.webp')
    with Image.open(source) as image:
        image.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
        image.save(destination, 'WEBP', quality=85, method=6)
    for document in ROOT.rglob('*.html'):
        if 'node_modules' in document.parts:
            continue
        content = document.read_text()
        document.write_text(content.replace(source.name, destination.name))
    source.unlink()
