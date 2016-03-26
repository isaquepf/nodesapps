module.exports = function(app) {
    
    var controller =  app.controller.contato;
    
    app.get('/contatos', controller.listaContatos);
    app.get('/contatos/:id', controller.obtemContato);         
}