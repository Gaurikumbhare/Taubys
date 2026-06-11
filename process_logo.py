import sys
from PIL import Image

try:
    img = Image.open('public/logo.png').convert('RGBA')
    width, height = img.size
    pixels = img.load()

    # We want to crop to the bottom half to remove the top "CAKES AND DESSERTS" and cake piece.
    # The user said "only show taubys not background".
    # Let's inspect where "Taubys" is. It's generally in the bottom 60%.
    # Actually, we can just process the whole image first, and if they want it cropped we can crop it.
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
                
            # Keep red and black, remove white and yellow
            # Alpha = 255 - max(G, B)
            # We scale it slightly to boost opacity for dark colors
            max_gb = max(g, b)
            new_a = int((255 - max_gb) * (a / 255.0) * 1.2)
            new_a = min(255, max(0, new_a))
            
            # Make the output pure white
            pixels[x, y] = (255, 255, 255, new_a)

    # To strictly show "only taubys", let's crop the top part.
    # The cake piece is on the top right. "Tauby's" starts a bit lower.
    # We can crop the top 30% of the image.
    crop_y = int(height * 0.25)
    img = img.crop((0, crop_y, width, height))

    img.save('public/logo-white.png', 'PNG')
    print("Successfully processed logo-white.png")
except Exception as e:
    print(f"Error: {e}")
