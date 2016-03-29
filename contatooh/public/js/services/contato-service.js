app.factory('contatoService', function($resource){   
   return $resource('/contatos/:id');   
});