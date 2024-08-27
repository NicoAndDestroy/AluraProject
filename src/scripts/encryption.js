document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('encryptionForm');
    const copyButton = document.getElementById('copyButton');

    const encryptText = (text) => {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    };

    const decryptText = (text) => {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const plainText = document.getElementById('plainText').value.trim();
        const action = document.getElementById('action').value;

        let resultText = "";
        if (action === "encrypt") {
            resultText = encryptText(plainText);
        } else if (action === "decrypt") {
            resultText = decryptText(plainText);
        }

        
        document.getElementById('resultText').innerText = resultText;
        console.log(`Result: ${resultText}`); // Para depurar
    });

    copyButton.addEventListener('click', function() {
        const resultText = document.getElementById('resultText').innerText;
        if (resultText) {
            navigator.clipboard.writeText(resultText).then(() => {
                alert('Texto copiado al portapapeles');
            }).catch(err => {
                console.error('Error al copiar el texto:', err);
            });
        } else {
            alert('No hay texto para copiar');
        }
    });
});
