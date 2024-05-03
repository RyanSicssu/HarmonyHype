const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configurar o middleware para analisar dados JSON
app.use(bodyParser.json());

// Rota para receber os dados do perfil
app.post('/api/perfil', (req, res) => {
    const { nome, email, senha } = req.body;
    // Aqui você pode adicionar lógica para processar os dados recebidos
    // Por exemplo, salvar no banco de dados ou realizar outras operações

    // Exemplo de resposta simples
    res.status(200).json({ mensagem: 'Dados do perfil recebidos com sucesso!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
