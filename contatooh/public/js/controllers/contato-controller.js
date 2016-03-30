app.controller('ContatoController', function($scope, $http, $routeParams, contatoService) {

    var messageFactory = new MessageFactory();

    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };
    $scope.contato = {};

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
    };

    if ($routeParams.contatoId) {
        contatoService.get({ id: $routeParams.contatoId }
            , function(contato) {
                $scope.contato = contato;
            }
            , function(error) {
                $scope.mensagem.texto = 'Não foi possivel obter o contatos: ' + error;
            });
    } else {
        $scope.contato = new contatoService();
    }

    $scope.removerContato = function(contato) {
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
        $scope.contato.$save()
        .then(function(){
            $scope.mensagem = { texto : 'Salvo com sucesso'};
            $scope.contato = {};
        }).catch(function(error){
            $scope.mensagem = { texto : 'Não foi possível gravar o contato.'};
        });        
    };
});

