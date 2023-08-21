const express = require ("express");
const app = express ();
app.get('/',(req, res) => {

res.send('Hola Mundirijillo');

});

app.get('/saludo',(req, res) => {
console.log ("Buenos dias Tecnologos");
res.send('Como Estas');
});

app.get('/saludo/:nombre', (req, res) => {
    res.send(`Buenos días ${req.params.nombre}`);
});

app.get('/saludo/:nombre/:edad', (req, res) => {
  const nombre = req.params.nombre;
  const edad = req.params.edad;
  res.send(`Hola me llamo ${nombre}.<br>Y tengo la edad de ${edad} años.`);
});


//3000 es el puerto
app.listen(3000,() => {
console.log("SERVIDOR OK en puerto 3000");
});

// Para poder verlo en el buscador de cualquier navegador web buscamos localhost:3000 y nos mostrara