module.exports = function(){
          
  var controller = {};
  
  var contatos = [{_id : 1, nome: 'Isaque', email: 'isaquepf@gmail.com'},
                  {_id : 2, nome: 'Dirlaine', email: 'dirlaineprestes@gmail.com'}];
  
  controller.listaContatos = function(request, response){      
      return response.json(contatos);
  };
  
  return controller;    
};