
/*Responsavel para tratamento de modelo do projeto*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TarefaSchema = new Schema({

    usuario: String,
    tempo: String,
    procedimento: String
});

module.exports = mongoose.model('Tarefa', TarefaSchema);