function MessageFactory() {

    this.createConfirmRemoveContact = function(callback) {
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