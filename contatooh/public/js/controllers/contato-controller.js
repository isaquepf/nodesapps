app.controller('ContatoController', function($scope, $routeParams) {
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
            
        var message = new Message();
        
        message.Confirm(function(){
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

function Message() {

    this.Confirm = function(callback) {
        swal({
            title: "Remoção de contato",
            text: "Deseja realmente remover o contato!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim!",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            html: false
        }, function() {
            swal("Removido!"
                , "Seu contato foi removido com sucesso!."
                , "success");

            callback.call();



        });

    }

}