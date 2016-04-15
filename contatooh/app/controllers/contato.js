var sanitize = require('mongo-sanitize');

module.exports = function (app) {

    var controller = {};

    var Contato = app.models.contato;

    controller.listaContatos = function (req, res) {
        Contato.find().populate('emergencia').exec()
            .then(function (contatos) {
                res.json(contatos);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            });
    };

    controller.obtemContato = function (req, res) {

        var id = req.params.id;

        Contato.findById(id).exec()
            .then(
            function (contato) {
                if (!contato) {
                    throw new Error("Contato não encontrado.");
                }
                res.json(contato);
            },
            function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            });
    };

    controller.removeContato = function (req, res) {
        var id = sanitize(req.params.id);

        Contato.remove({ '_id': id }).exec()
            .then(function () {
                res.status(204).end();
            }, function (erro) {
                return console.log(erro);
            });
    };

    controller.salvarContato = function (req, res) {
        var id = req.body._id;

        var contatoRQ = {
            "nome": req.body.nome,
            "email": req.body.email,
            "emergencia": req.body.emergencia || null
        };

        if (id) {
            Contato.findByIdAndUpdate(id, contatoRQ).exec().then(function (contato) {
                res.json(contato);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            });
        } else {
            Contato.create(contatoRQ).then(function (contato) {
                res.status(201).json(contato);
            }, function (erro) {
                console.log(erro);
                res.status(500).json(erro);
            })
        }
    };

    return controller;
};

