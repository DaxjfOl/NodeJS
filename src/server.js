require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

//config app to use body parser to read data from request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);



//khai bao route
app.use('/', webRoutes);


//test connect 

//simple query
// connection.query(
//     'SELECT  * from Users',
//     function (err, results, fields) {
//         console.log('>>> check mysql connection: ', results);
//         console.log('>>> check mysql connection fields: ', fields);
//     }
// )

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})