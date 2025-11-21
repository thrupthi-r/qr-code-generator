from flask import Flask, render_template, request, send_file
import qrcode
from io import BytesIO
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-qr', methods=['POST'])
def generate_qr():
    try:
        data = request.json
        text = data.get('text', '')
        
        if not text:
            return {'error': 'No text provided'}, 400
        
        # Get customization options from request
        fill_color = data.get('fill_color', 'white')
        back_color = data.get('back_color', 'black')
        box_size = int(data.get('box_size', 10))
        border = int(data.get('border', 2))
        
        # Create QR code
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_H,
            box_size=box_size,
            border=border,
        )
        qr.add_data(text)
        qr.make(fit=True)
        
        # Generate image
        img = qr.make_image(fill_color=fill_color, back_color=back_color)
        
        # Save to BytesIO object
        img_io = BytesIO()
        img.save(img_io, 'PNG')
        img_io.seek(0)
        
        return send_file(img_io, mimetype='image/png')
    
    except Exception as e:
        return {'error': str(e)}, 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
