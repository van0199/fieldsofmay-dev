
// require('dotenv').config()
const express = require('express');
const articleRouter = require('./routes/articles');
// const aboutRouter = require('./routes/about');
const app = express();
const port = 3001;


// we are useing the public folder
app.use(express.static('public'))

app.set('view engine', 'ejs');

// getting pages
app.use('/articles', articleRouter)
// app.use('/about', aboutRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Fields of May'
    },
    {
        title: 'Witness Seminar in Seili'
    },
    {
        title: 'A Witness Seminar How-To'
    },
    {
        title: 'About'
    },
]
    res.render('articles/index', { articles: articles })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
;











// const express = require("express");
// const bodyParser = require('body-parser');
// // const mongoose = require("mongoose");
// // const config = require("config");
// const app = express();
// const port = process.env.PORT || 5000;
// // const db = config.get('mongoURI');

// // bodyParser
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true }));


// app.listen(port, () => console.log(`Server running on port: ${port}`));