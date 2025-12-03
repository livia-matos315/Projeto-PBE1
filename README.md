# Portal de Notícias PBE 📰

**Identificação do Aluno(a):** Lívia Oliveira Martins Matos

---

## 📝 Descrição
O **Portal de Notícias PBE** é uma aplicação web desenvolvida para exibir notícias de forma dinâmica.

O diferencial deste projeto é que o conteúdo não é estático (hardcoded). O sistema se conecta a uma fonte de dados externa (API) e, através de uma **barra de pesquisa**, permite que o usuário busque por tópicos específicos. Ao realizar a busca, o site atualiza a lista automaticamente, trazendo notícias novas e relevantes sobre o tema digitado.

## 🚀 Funcionalidades
* **Listagem de Notícias:** Exibição de cards contendo imagem, título e link para a matéria original.
* **Busca Dinâmica:** O usuário digita um tema e o site retorna notícias atualizadas sobre aquele assunto.
* **Frontend Dinâmico:** Utilização de templates (EJS) para renderizar o conteúdo vindo do servidor.
---

## 📖 Como Usar (Usuário Final)

1.  Abra a página inicial do portal no seu navegador.
2.  Localize a **Barra de Pesquisa** no topo ou destaque da página.
3.  **Digite uma palavra-chave** (ex: "Tecnologia", "Esportes", "Brasil").
4.  Clique em pesquisar ou aperte Enter.
5.  O site irá recarregar e exibir as novas notícias relacionadas ao termo que você digitou.

---

## 💻 Como Rodar o Projeto (Instalação Técnica)

Para rodar este projeto localmente em sua máquina, siga os passos abaixo:

1.  **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2.  **Clone ou baixe o repositório:**
    ```bash
    git clone <https://github.com/livia-matos315/Projeto-PBE1.git>
    ```
3.  **Instale as dependências:**
    Abra o terminal na pasta do projeto e execute:
    ```bash
    npm install
    ```
4.  **Configure a API Key (Opcional):**
    Caso necessário, crie um arquivo `.env` e adicione sua chave da API de notícias.
5.  **Inicie o servidor:**
    ```bash
    npm start
    # ou
    node index.js
    ```
6.  **Acesse no navegador:**
    Abra o endereço `http://localhost:3000` (ou a porta configurada no seu terminal).

---

**Status do Projeto:** ✅ Concluído / Em Desenvolvimento
