const {Sequelize} = require("sequelize");


const conn = new Sequelize('livrosDoBreno', 'root', '', {
    host: 'localhost',
    dialect:"mysql"
  });

  conn.sync()
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((error) => {
    console.error("Não foi possível conectar ao banco de dados:", error);
  });


module.exports = conn;
