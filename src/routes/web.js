const express = require('express');
const { getHomepage, getDaxjfPage, postCreateUser } = require('../controllers/homeController');
const router = express.Router();



router.get('/', getHomepage);
router.get('/daxjf', getDaxjfPage);

router.post('/create-user', postCreateUser);



module.exports = router;