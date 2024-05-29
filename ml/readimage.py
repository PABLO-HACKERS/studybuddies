import pytesseract
import PIL.Image
import cv2

config = r"--psm 3 --oem 3"

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def process_image(filepath):
    image = cv2.imread(filepath)
    
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY_INV)

    text = pytesseract.image_to_string(PIL.Image.open(filepath), config=config)
    
    return text
    
    
print(process_image("ml/testdata/derivativetest2.png"))