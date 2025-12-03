// Importando as dependências
require("dotenv").config(); // Carrega as variáveis do arquivo .env
const express = require("express");
const axios = require("axios");
const app = express();
// Configurações do Projeto
app.set("view engine", "ejs"); // Define EJS como motor de visualização
app.use(express.static("public")); // Define onde estão arquivos estáticos (CSS/Img)
// ROTA PRINCIPAL (Home)
app.get("/", async (req, res) => {
try {
// Pega a chave do arquivo .env
const minhaChave = process.env.API_KEY;
// Verifica se houve uma busca (query param 'q')
const termoBusca = req.query.q;
let url = "";
if (termoBusca) {
// Se usuário buscou algo, usa o endpoint 'everything' com idioma português
// IMPORTANTE: O endpoint 'everything' aceita o parâmetro language
url = `https://newsapi.org/v2/everything?q=${termoBusca}&language=pt&apiKey=${minhaChave}`
} else {
// Se não, mostra as manchetes do Brasil
// IMPORTANTE: O endpoint 'top-headlines' NÃO aceita o parâmetro language
// As notícias virão automaticamente em português por ser country=br
url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${minhaChave}`;
}
// Vai buscar os dados na API
const response = await axios.get(url);
// Renderiza a página enviando a lista de notícias
res.render("index", { noticias: response.data.articles });
} catch (error) {
console.error("Erro na API:", error.message);
// Se der erro, carrega a página com lista vazia para não travar
res.render("index", { noticias: [] });
}
});

// Inicia o Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});