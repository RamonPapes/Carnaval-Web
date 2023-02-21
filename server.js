const express = require('express');
const app = express();

app.use(express.static('public/src/pages'));

// Rota para a página inicial
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/src/pages/index.html');
});

//Rota para as páginas de cada dia
app.get('/dia/:value', (req, res) =>{
  const value = req.params.value;
  res.sendFile(__dirname + `/public/src/pages/dia${value}/index.html`);
});

// Inicie o servidor
app.listen(3000, ()=>{
  console.log('Servidor iniciado na porta 3000!');
})