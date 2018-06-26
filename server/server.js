var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
fs = require('fs');
const _port = 3000;
var app = express();
//On configure le comportement des réponses des requêtes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Permet d'outre passer les sécurité rajouter dans l'entête de chaque requête 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // Passe la main à la prochaine Erreur
});
app.post('/askhint', function (req, res) {
    console.log('Looking for correlation');
    
    fs.readFile('./server/prenom.txt', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        var raw = data.split('|');
        var tab = [];
        raw.forEach(name => {
            if(name.toLocaleLowerCase().includes(req.body.string.toLocaleLowerCase())){
                tab.push(name);
            }
        });
        res.status(200).send(tab).end();
    });
});
app.listen(_port, function () {
    console.log('Server listening on  : ' + _port);
});