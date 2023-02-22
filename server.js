const express = require('express');
const app = express();

app.use(express.static('public/src/pages'));
// Rota para a página inicial
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/src/pages/index.html');
});

//Rota para as páginas de cada dia
// app.get('/dia/:value', (req, res) => {
//   const value = req.params.value;
//   res.sendFile(__dirname + `/public/src/pages/dia${value}.html`);
// });

app.get('/dia1',(req,res)=>{
  res.sendFile(__dirname + '/public/src/pages/dia1.html');
})
app.get('/dia2',(req,res)=>{
  res.sendFile(__dirname + '/public/src/pages/dia2.html');
})
app.get('/dia3',(req,res)=>{
  res.sendFile(__dirname + '/public/src/pages/dia3.html');
})
app.get('/dia4',(req,res)=>{
  res.sendFile(__dirname + '/public/src/pages/dia4.html');
})
app.get('/dia5',(req,res)=>{
  res.sendFile(__dirname + '/public/src/pages/dia5.html');
})
app.get('/dia6',(req,res)=>{
  res.sendFile(__dirname + '/public/src/pages/dia6.html');
})


// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
})