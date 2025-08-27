# app.py
from fastapi import FastAPI, UploadFile, File
import easyocr
import os

app = FastAPI()
reader = easyocr.Reader(["en"], gpu=False)  # disable GPU (Hugging Face free tier has no GPU)

@app.get("/")
def home():
    return {"message": "OCR service is running!"}

@app.post("/ocr")
async def ocr(file: UploadFile = File(...)):
    contents = await file.read()
    temp_path = "temp.jpg"
    
    # Save uploaded file
    with open(temp_path, "wb") as f:
        f.write(contents)
    
    # Run OCR
    result = reader.readtext(temp_path, detail=0)
    
    # Clean up
    os.remove(temp_path)
    
    return {"text": result}
