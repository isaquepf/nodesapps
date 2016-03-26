module.exports = function() {
  
  var contatos = [{_id : 1,
                    nome : 'Isaque',
                    email : 'isaquepf@gmail.com'
                  },
                  {_id : 2,
                    nome : 'Dirlaine',
                    email : 'dirlaineprestes@gmail.com'
                }];
  
  var controller = {};
  
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
    
  return controller;
};

