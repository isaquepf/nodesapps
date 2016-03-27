var app = angular.module('contatooh', ['ngRoute']);

app.config(function($routeProvider) {
 
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatoController'
    });
    
    $routeProvider.otherwise({ redirectTo : '/contatos'});
});