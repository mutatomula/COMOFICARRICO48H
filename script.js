document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (email) {
        // Exibe a mensagem de confirmação
        confirmationMessage.classList.add('visible');

        // Simula o envio do e-mail (você pode integrar com um backend aqui)
        console.log(`E-mail registrado: ${email}`);

        // Inicia o download do ebook após 2 segundos
        setTimeout(function() {
            const link = document.createElement('a');
            link.href = 'COMO_FICAR_RICO_EM_48H.pdf'; // Nome do arquivo PDF
            link.download = 'COMO_FICAR_RICO_EM_48H.pdf'; // Nome do arquivo para download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 2000); // Delay de 2 segundos para o download
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});