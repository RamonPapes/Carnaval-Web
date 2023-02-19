const express = require('express');
const path = require('path');
const mime = require('mime');

const app = express();

app.use(express.static('public/src/pages'));

// Rota para a página inicial
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/src/pages/index.html');
});


// app.get('/dia1', function (req, res) {
//   res.sendFile(__dirname + '/public/src/pages/dia1/index.html');
// });

//Rota para as páginas de cada dia

// for (let i = 1; i <= 6; i++) {
//   app.get(`/dia${i}`, (req, res) => {
//     res.sendFile(__dirname + `/public/src/pages/dia${i}/index.html`);
//   });
// }


app.get('/dia/:value', (req, res) =>{
  console.log(req);
  const  value  = req.params.value;
  res.sendFile(__dirname + `/public/src/pages/dia${value}/index.html`);
});

// app.get('/dia/:value', (req, res) => {
//   const value = req.params.value;
//   const filePath = `${__dirname}/public/src/pages/dia${value}/index.html`;
//   res.sendFile(filePath);
// });

// Inicie o servidor
app.listen(3000, function () {
  console.log('Servidor iniciado na porta 3000!');
});