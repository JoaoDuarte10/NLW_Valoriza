# Dependências do Projeto:

    TypeScript,
    Express

# TypeScript

    Define tipagem ao JavaScript. 

    nome-da-variavel: tipo-da-variavel

# Métodos http

    GET: Buscar uma informação.
    POST: Inserir uma informação.
    PUT: Editar informações.
    DELETE: Deletar dados.
    PATCH: Alterar informação específica.

# Instalações do projeto

    Iniciar o projeto com yarn
        yarn init -y

    Adicionar o TypeScript ao projeto como dependencia de desenvolvimento
        yarn add typescript -D

    Iniciando o TypeScript
        yarn tsc --init

    Instalando o express
        yarn add express

    Instalando pacote de tipagem do express
        yarn add @types/express -D
        
    Instalando "Running" do typescript para o node
        yarn add ts-node-dev -D

    Instalando configurações do Banco de Dados:
        yarn add typeorm reflect-metadata sqlite3

    

# Tipos de parametros

    Routes Params => http://localhost:3000/produtos/84654654 (parametros inseridos na própria rota, separados por barra "/")

    Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom
    (parametros não obrigatórios, do tipo chave e valor)

    Body Params => {
        "name": "teclado",
        "description": "teclado bom"
    } 
    (Parametros que vem no corpo da requisição)

# Banco de Dados

    Driver Nativo: SQL puro
    Query Builder: Ferramentas que faciliram a escrita de SQL
    ORM: Frameworks que transformam a linguagem (Javascript) em SQL