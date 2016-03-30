module.exports = function() {
  
  var contatos = [{_id : 1,
                    nome : 'Isaque',
                    email : 'isaquepf@gmail.com'
                  },
                  {_id : 2,
                    nome : 'Dirlaine',
                    email : 'dirlaineprestes@gmail.com'
                }];
  var key = 2;
  var controller = {};

  controller.salvarContato = function(req, res) {
    
       var contato = req.body;
       contato = contato._id ? atualizar(contato) 
                             : adicionar(contato);                             
       res.json(contato);                                                       
  };

  function adicionar(contato) {
      contato._id = ++key;      
      contatos.push(contato);
      return contato;       
  }
  
  function atualizar(contatoNovo) {
      
        contatos = contatos.map(function(contato) {
            if(contato._id == contatoNovo._id){
                contato = contatoNovo;
            }
            return contato;
        });
        return contatoNovo;       
  }

  
  controller.listaContatos = function(req, res) {
      res.json(contatos);
  };
  
  controller.obtemContato = function(req, res) {
      
    var id = req.params.id;
    
    var contato = contato.filter(function(){
       return contato._id == id; 
    })[0];
    
    contato ? res.json(contato) 
            : res.status(404).send('Contato não encontrado');  
      
  };
    
  controller.removeContato = function(req, res) {
    var id = req.params.id;
    contatos = contatos.filter(function(contato){
       return contato._id != id; 
    });
    
    res.status(204).end();      
  };
    
  return controller;
};

