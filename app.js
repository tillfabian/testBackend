const express = require('express');
const app = express();
const sequelize = require('./database/db');
const port = 3000

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/api/posts',require('./routers/posts'));
app.use('/api/categoria',require('./routers/categoria'));

//Servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
  //Conexion con la base de datos
  sequelize.sync({ force: false }).then( () => {
    console.log(`conectados ala base de datos`);
  }).catch( error => {
      console.log('se ha producido un error', error);
  })
})  