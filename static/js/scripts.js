// QR Code Generator - Dynamic Scripts with Reset Functionality

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const downloadBtn = document.getElementById('download-btn');
    const qrResult = document.getElementById('qr-result');
    const fillColorInput = document.getElementById('fill-color');
    const backColorInput = document.getElementById('back-color');
    const boxSizeInput = document.getElementById('box-size');
    const borderInput = document.getElementById('border');
    const sizeValue = document.getElementById('size-value');
    const borderValue = document.getElementById('border-value');
    
    let currentQRUrl = null;

    // Default values
    const defaults = {
        text: '',
        fillColor: '#ffffff',
        backColor: '#000000',
        boxSize: 10,
        border: 2
    };

    // Update slider values display
    boxSizeInput.addEventListener('input', (e) => {
        sizeValue.textContent = e.target.value;
    });

    borderInput.addEventListener('input', (e) => {
        borderValue.textContent = e.target.value;
    });

    // Generate QR Code
    generateBtn.addEventListener('click', async () => {
        const text = textInput.value.trim();
        
        if (!text) {
            showError('Please enter some text or URL');
            return;
        }

        // Disable button and show loading state
        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';
        
        try {
            const response = await fetch('/generate-qr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text,
                    fill_color: fillColorInput.value,
                    back_color: backColorInput.value,
                    box_size: boxSizeInput.value,
                    border: borderInput.value
                })
            });

            if (!response.ok) {
                throw new Error('Failed to generate QR code');
            }

            const blob = await response.blob();
            currentQRUrl = URL.createObjectURL(blob);
            
            // Display QR code
            qrResult.innerHTML = `<img src="${currentQRUrl}" alt="Generated QR Code">`;
            downloadBtn.style.display = 'block';
            
        } catch (error) {
            showError('Error generating QR code. Please try again.');
            console.error('Error:', error);
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate QR Code';
        }
    });

    // Reset Function
    resetBtn.addEventListener('click', () => {
        // Clear text input
        textInput.value = defaults.text;
        
        // Reset color inputs
        fillColorInput.value = defaults.fillColor;
        backColorInput.value = defaults.backColor;
        
        // Reset sliders
        boxSizeInput.value = defaults.boxSize;
        borderInput.value = defaults.border;
        
        // Update slider displays
        sizeValue.textContent = defaults.boxSize;
        borderValue.textContent = defaults.border;
        
        // Clear QR code result
        qrResult.innerHTML = '<p>Your QR code will appear here</p>';
        downloadBtn.style.display = 'none';
        
        // Clear current QR URL
        if (currentQRUrl) {
            URL.revokeObjectURL(currentQRUrl);
            currentQRUrl = null;
        }
        
        // Add animation effect
        resetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            resetBtn.style.transform = 'scale(1)';
        }, 100);
    });

    // Download QR Code
    downloadBtn.addEventListener('click', () => {
        if (currentQRUrl) {
            const link = document.createElement('a');
            link.href = currentQRUrl;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });

    // Enter key to generate
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            generateBtn.click();
        }
    });

    // Show error message
    function showError(message) {
        qrResult.innerHTML = `<p style="color: #f85149;">⚠️ ${message}</p>`;
        downloadBtn.style.display = 'none';
    }

    // Add color input change animation
    [fillColorInput, backColorInput].forEach(input => {
        input.addEventListener('change', () => {
            input.style.transform = 'scale(1.1)';
            setTimeout(() => {
                input.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
