app.controller('ContatoController', function($scope, $http, $routeParams, contatoService) {

    var messageFactory = new MessageFactory();

    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = { texto : ''};
    
    $scope.init = function() {
        buscaContatos();
    };

    $scope.init();

    function buscaContatos() {
        contatoService.query(function(contatos) {
            $scope.contatos = contatos;
        }, function(error) {
            $scope.mensagem.texto = 'Não foi possivel obter a lista de contatos: ' + error;             
        });
    }

    $scope.removerContato = function(index) {
        messageFactory.createConfirmRemoveContact(function() {
            $scope.$apply(function() {
                var promisse = contatoService.delete({ id: contato._id },
                    buscaContatos,
                    function(error) {
                        $scope.mensagem.texto = 'Não foi possivel remover o contato. ' + error;                        
                    });
            });
        });
    };

    $scope.adicionarContato = function(contato) {
        $scope.contatos.push(contato);
        sweetAlert('Eba!', 'Contato ' + contato.nome + ' salvo com sucesso!', 'success');
    };
});

