const { render } = require('ejs');
const connection = require('../config/database');
const e = require('express');



const getHomepage = (req, res) => {

    return res.render('homepage.ejs')


}
const getDaxjfPage = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    // console.log(req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(email, name, city);



    connection.query(
        ` INSERT INTO Users (email, name, city) 
          VALUES (?, ?, ?);`,
        [email, name, city],
        function (err, results) {
            console.log(results);

            res.send('Post create user successfully!')
        }
    );

}

module.exports = {
    getHomepage,
    getDaxjfPage,
    postCreateUser
}