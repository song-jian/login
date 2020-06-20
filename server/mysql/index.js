const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'react'
})

connection.connect(() => {
    console.log('链接成功')
});

function sqlFn(sql, arr, callback) {
    connection.query(sql, arr, function (error, result) {
        if (error) {
            callback(new Error(error));
        }
        callback(result)
    })
}

module.exports = sqlFn