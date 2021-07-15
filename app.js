const express = require ('express');
const app = express();
const path = require ('path');


app.get('/home', (req, res)=>{
    //res.send('Ruta ppal');
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/register', (req, res)=>{
    //res.send('Ruta ppal');
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', (req, res)=>{
    //res.send('Ruta ppal');
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

//mencionar que public es la carpeta estatica de la aplicacion
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () =>{
    console.log('Corriendo puerto 3000');
})

