document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Validação simples
    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
    } else {
        errorMessage.textContent = '';
        
        // Aqui você pode implementar a lógica de autenticação com o backend
        console.log('Usuário:', username);
        console.log('Senha:', password);

        // Exemplo de redirecionamento ou mensagem de sucesso
        alert('Login realizado com sucesso!');
        // window.location.href = "pagina_inicial.html"; // Exemplo de redirecionamento
    }
});
