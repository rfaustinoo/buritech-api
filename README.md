# Buritech
# API Rest com NodeJS e Express junto de MongoDB

# Recursos utilizados no desenvolvimento:
    Node.Js
    Express.Js ~ v.4.0;
    Conceito Rest;
    MongoDb 
    Visual Studio Code 
    Mongoose ~4.x;
    JSON data (para retornar os dados);
    PostMan (testar a API criada);

# Testando a Aplicação no Postman:

           ROTA                         HTTP(Verbo)             Descrição
        /api/tarefas                     GET                     Selecionar Todos
        /api/tarefas                     POST                    Criar paciente
        /api/tarefas/_id                 GET                     Selecionar Por Id
        /api/tarefas/_id                 PUT                     Atualizar Por Id
        /api/tarefas/_id                 DELETE                  Excluir Por Id

# Executando a Aplicação
        
        Antes de realizar qualquer operação tenha todos os recursos instalados na sua máquina.
        Abra o visual Studio Code.
        No proprio Visual Studio Code, abrir o terminal e realizar os seguintes comandos:
                npm install *Instalação das dependências do projeto*
                
        Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb, no CMD digite o seguinte comando:
                mongod
        
        Caso queria adicionar arquivos pelo .txt que está disponível para download:
            abra um outro comando CMD e digite "mongo" ao abrir basta copiar os arquivos que estão no .txt e colocar no CMD e
            apertar enter para ele dar entrada na collection.
                
        logo após intalar todas as dependências e abrir o mongo, realizar o próximo comando no "VS code":
                npm run dev

        

Após isso a máquina está pronta para realizar os procedimentos.
Foi usando o POSTMAN para realizar o teste.

# Exemplo de como adicionar um novo item ao banco

 As key's a serem usadas no postman serão:
  procedimento / usuario / tempo
 
 Os valores podem ser colocados de acordo com as suas key's.
      
 Será adicionado um arquivo em .txt para ser baixado para ser adicionando dados ao banco de dados caso queria adicionar.
 
        No postman o arquivo deve está em Body como x-www-form-unlencoded
        
# Explicando outros métodos

    O Método (Put e Delete), será necessário colocar o ID do usuário adicionado como no exemplo:
        http://localhost:8000/api/paciente/5c851s587q412s65afg
        
    Esse número "5c851s587q412s65afg" é o id aleatório do usuário adicionado que será guardado no banco de dados.
