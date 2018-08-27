// Configurar o Setup da App:

//Chamadas dos pacotes:
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Tarefa = require('./app/models/tarefa');


mongoose.Promise = global.Promise;


//conectando ao MongoDb
mongoose.connect('mongodb://localhost:27017/api-crud-buri', {
    useMongoClient: true
});


//Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta onde será executada a nossa api:
var port = process.env.port || 8000;


//Criando uma instância das Rotas via Express:
var router = express.Router();

//Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão:
router.use(function(req, res, next) {
    console.log('Algo está acontecendo aqui....');
    next(); //aqui é para sinalizar de que prosseguiremos para a próxima rota. E que não irá parar por aqui!!!
});

//Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/api):
router.get('/', function(req, res) {
    res.json({ message: 'Beleza! Funcionando normalmente' })
});

//API's:
//==============================================================================

//Rotas que terminarem com '/tarefas' (servir: GET ALL & POST)
router.route('/tarefas')

    /* 1) Método: Criar tarefa (acessar em: POST http://localhost:8000/api/tarefas)  */
    .post(function(req, res) {
        var tarefa = new Tarefa();

        //Aqui vamos setar os campos do tarefa (via request):
        tarefa.usuario = req.body.usuario;
        tarefa.tempo = req.body.tempo;
        tarefa.procedimento = req.body.procedimento;

        tarefa.save(function(error) {

            if(error)
                res.send('Erro ao tentar salvar o tarefa....: ' + error);

            res.json({ message: 'tarefa Cadastrado com Sucesso!' });
        });
    })

    /* 2) Método: Selecionar Todos tarefas (acessar em: GET http://localhost:8000/api/tarefas)  */
    .get(function(req, res) {
        Tarefa.find(function(error, tarefas) {
            if(error)
                res.send('Erro ao tentar Selecionar Todos os tarefas...: ' + error);

            res.json(tarefas);
        });
    });

    //Rotas que irão terminar em '/tarefas/:tarefa_id' (servir tanto para: GET, PUT & DELETE: id):
    router.route('/tarefas/:tarefa_id')

    /* 3) Método: Selecionar por Id: (acessar em: GET http://localhost:8000/api/tarefas/:tarefa_id) */
    .get(function (req, res) {

        //Função para poder Selecionar um determinado tarefa por ID - irá verificar se caso não encontrar um detemrinado
        //tarefa pelo id... retorna uma mensagem de error:
        Tarefa.findById(req.params.tarefa_id, function(error, tarefa) {
            if(error)
                res.send('Id do tarefa não encontrado....: ' + error);

            res.json(tarefa);
        });
    })

    /* 4) Método: Atualizar por Id: (acessar em: PUT http://localhost:8000/api/tarefas/:tarefa_id) */
    .put(function(req, res) {

        //Primeiro: para atualizarmos, precisamos primeiro achar 'Id' do 'tarefa':
        Tarefa.findById(req.params.tarefa_id, function(error, tarefa) {
            if (error)
                res.send("Id do tarefa não encontrado....: " + error);

                //Segundo:
                tarefa.usuario = req.body.usuario;
                tarefa.tempo = req.body.tempo;
                tarefa.procedimento = req.body.procedimento;

                //Terceiro: Agora que já atualizamos os dados, vamos salvar as propriedades:
                tarefa.save(function(error) {
                    if(error)
                        res.send('Erro ao atualizar o tarefa....: ' + error);

                    res.json({ message: 'tarefa atualizado com sucesso!' });
                });
            });
        })

        /* 5) Método: Excluir por Id (acessar: http://localhost:8000/api/tarefas/:tarefa_id) */
        .delete(function(req, res) {
            Tarefa.remove({
                _id: req.params.tarefa_id
                }, function(error) {
                    if (error)
                        res.send("Id do tarefa não encontrado....: " + error);

                    res.json({ message: 'tarefa Excluído com Sucesso!' });
                });
            });


//Definindo um padrão das rotas prefixadas: '/api':
app.use('/api', router);

//Iniciando a Aplicação (servidor):
app.listen(port);
console.log("Iniciando a app na porta " + port);