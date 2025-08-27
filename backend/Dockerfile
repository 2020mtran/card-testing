# Base image
FROM python:3.10-slim

# System dependencies for OpenCV + Torch
RUN apt-get update && apt-get install -y \
    build-essential \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /ocr_service

# Copy backend code into container
COPY . .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Run FastAPI app on HF Spaces port
CMD ["uvicorn", "ocr_service:app", "--host", "0.0.0.0", "--port", "${PORT}"]
