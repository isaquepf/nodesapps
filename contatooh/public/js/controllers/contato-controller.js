app.controller('ContatoController', function($scope, $routeParams) {
    
    var messageFactory = new MessageFactory();
    
    $scope.total = 0;
    
    $scope.increment = function() {
        $scope.total++;
    };

    $scope.contatos = [{
        _id: 1,
        nome: 'Isaque',
        email: 'isaquepf@gmail.com'
    }, {
            _id: 2,
            nome: 'Dirlaine',
            email: 'dirlaineprestes@gmail.com'
        }];


    $scope.removerContato = function(index) {
                                   
        messageFactory.createConfirmRemoveContact(function(){
                $scope.$apply(function() {
                $scope.contatos.splice(index, 1)                
            });    
        });        
    };


    $scope.adicionarContato = function(contato) {
        $scope.contato.push(contato);
        sweetAlert('Eba!', 'Contato ' + contato.nome + ' salvo com sucesso!', 'success');
    };

});

