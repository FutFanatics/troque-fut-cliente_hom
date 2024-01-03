# TroqueFUT Cliente: Sistema de Trocas da FutFanatics

O TroqueFUT Cliente é um projeto desenvolvido para proporcionar uma interface interativa ao cliente final, permitindo realizar trocas de produtos de forma simplificada. Construído em React com Typescript e empregando as bibliotecas Styled-Components e Axios para funcionalidades essenciais.

## Funcionalidades do projeto

...

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **React:** Biblioteca para desenvolvimento de interfaces de usuário dinâmicas e responsivas.
- **Typescript:** Linguagem de programação que adiciona tipagem estática ao Javascript, fornecendo mais robustez ao código.
- **Styled-Components:** Biblioteca para estilização de componentes React utilizando CSS-in-JS, oferecendo flexibilidade na criação de estilos.
- **Axios:** Biblioteca para realizar conexões com APIs REST, facilitando o gerenciamento de requisições.
- **YAML:** Utilização de arquivos YAML para configurar o fluxo de implantação, automatizando o processo de deploy da aplicação.

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Execute `npm install` para instalar as dependências do projeto.
2. Utilize `npm run start` para iniciar a aplicação.

## Infraestrutura

Este projeto está hospedado na AWS, utilizando os seguintes serviços:

- **Bucket do Amazon S3:** O projeto está sendo servido a partir de um bucket S3, hospedando o conteúdo estático.
- **Configuração de Site Estático:** O bucket S3 está configurado para hospedar um site estático, permitindo o acesso e a navegação pelo conteúdo.
- **Distribuição com Cache via CloudFront:** Utilização do CloudFront para distribuir o conteúdo estático, proporcionando um melhor desempenho e cache para os usuários.

## Workflow Automático

Este projeto já possui um workflow automático configurado para facilitar o fluxo de desenvolvimento. Quando houver alterações no repositório, o workflow será acionado automaticamente para executar tarefas como build do projeto e implantação.
