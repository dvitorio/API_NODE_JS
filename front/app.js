// Importação dos módulos
var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');

// App
var app = express();

//Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Template
app.engine('handlebars', expressHandlebars.engine({defaultLayout: 'principal'}));
app.set('view engine', 'handlebars');

//Especificar diretórios estáticos
app.use(express.static(__dirname + '/public'));

// Rotas
app.get('/', (req, res)=>{
     res.render('inicio');
});

// Servidor
app.listen(3030);
