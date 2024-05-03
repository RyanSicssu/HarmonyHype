// Simulando armazenamento de usuários
let usuarios = [];

// Função para cadastrar usuário
function cadastrarUsuario(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    // Cria um objeto usuário
    let novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Adiciona o novo usuário ao array de usuários
    usuarios.push(novoUsuario);

    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';

    console.log('Novo usuário cadastrado:', novoUsuario);
}

// Função para fazer login
function fazerLogin(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores do formulário
    let email = document.getElementById('email-login').value;
    let senha = document.getElementById('senha-login').value;

    // Procura o usuário pelo e-mail
    let usuario = usuarios.find(user => user.email === email);

    if (usuario) {
        // Verifica se a senha está correta
        if (usuario.senha === senha) {
            alert('Login bem-sucedido!');
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    } else {
        alert('Usuário não encontrado. Por favor, cadastre-se.');
    }

    // Limpa os campos do formulário de login
    document.getElementById('email-login').value = '';
    document.getElementById('senha-login').value = '';
}

// Adiciona os event listeners para os formulários
document.getElementById('cadastro-form').addEventListener('submit', cadastrarUsuario);
document.getElementById('login-form').addEventListener('submit', fazerLogin);

// Simulação de armazenamento de músicas
let musicas = [];

// Função para enviar música
function enviarMusica(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores do formulário
    let nomeArtista = document.getElementById('nome-artista').value;
    let tituloMusica = document.getElementById('titulo-musica').value;
    let genero = document.getElementById('genero').value;
    let arquivo = document.getElementById('arquivo').files[0];

    // Validação do formato de arquivo (apenas MP3)
    if (arquivo && arquivo.type !== 'audio/mp3') {
        alert('Por favor, selecione um arquivo de áudio no formato MP3.');
        return;
    }

    // Simulação de upload da música (poderia ser enviado para um servidor real aqui)
    let novaMusica = {
        nomeArtista: nomeArtista,
        tituloMusica: tituloMusica,
        genero: genero,
        arquivo: arquivo.name // Apenas salvamos o nome do arquivo para a simulação
    };

    // Adiciona a nova música à lista de músicas
    musicas.push(novaMusica);

    // Limpa os campos do formulário
    document.getElementById('nome-artista').value = '';
    document.getElementById('titulo-musica').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('arquivo').value = '';

    alert('Música enviada com sucesso!');
}

// Adiciona o event listener para o formulário de upload
document.getElementById('upload-form').addEventListener('submit', enviarMusica);


// Função para validar o formulário de edição de perfil
function validarPerfil(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmar-senha').value;

    // Validação do nome
    if (nome.trim() === '') {
        alert('Por favor, insira seu nome.');
        return;
    }

    // Validação do email
    if (!isEmailValido(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validação da senha
    if (senha.trim() !== '' && senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, insira senhas iguais.');
        return;
    }

    // Se todas as validações passarem, pode-se enviar o formulário
    enviarPerfil(nome, email, senha);
}

// Função para verificar se um e-mail é válido
function isEmailValido(email) {
    // Expressão regular para verificar se o e-mail é válido
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Função para enviar os dados do perfil para o backend
function enviarPerfil(nome, email, senha) {
    // Aqui você pode enviar os dados do perfil para o backend
    // Por exemplo, você pode fazer uma requisição AJAX para um endpoint de API
    // e processar os dados no servidor
    console.log('Dados do perfil enviados para o backend:', nome, email, senha);

    // Exemplo: redirecionamento para a página inicial após o envio bem-sucedido
    window.location.href = 'index.html';
}

// Adiciona o event listener para o formulário de edição de perfil
document.getElementById('perfil-form').addEventListener('submit', validarPerfil);
