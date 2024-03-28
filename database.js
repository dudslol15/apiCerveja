const pg = require('pg')

const database = new pg.Client('postgres://qirbszjt:L1OLG9dWjm-1VyioI2zFvQ3HMEOWA-Wn@babar.db.elephantsql.com/qirbszjt')

database.connect((erro) => {
    if (erro) return console.log('Erro na conexão com o DB', erro)
    return console.log('Conectado ao DB!')
})

module.exports = database