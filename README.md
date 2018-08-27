# buritech-api
# API-Rest-com-NodeJS-Express-MongoDB

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
                npm install
                
        Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb, no CMD digite o seguinte comando:
                mongod
                
        logo após intalar todas as dependências e abrir o mongo, realizar o próximo comando no "VS code":
                npm run dev

        

Após isso a máquina está pronta para realizar os procedimentos.
Foi usando o POSTMAN para realizar o teste.

# Exemplo de como adicionar um paciente novo

 As key's a serem usadas no postman serão:
  procedimento / usuario / tempo
      
 Será adicionado um arquivo em .txt para ser baixado para ser adicionando dados ao banco de dados caso queria adicionar.
 
        No postman o arquivo deve está em Body como x-www-form-unlencoded
#Explicando outros métodos

    O Método (Put e Delete), será necessário colocar o ID do usuário adicionado como no exemplo:
        http://localhost:8000/api/paciente/5c851s587q412s65afg
        
    Esse número "5c851s587q412s65afg" é o id aleatório do usuário adicionado que será guardado no banco de dados.
