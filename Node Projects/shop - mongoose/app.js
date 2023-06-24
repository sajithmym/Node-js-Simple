const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const user = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('64969f6dc4cc60452cd896f3')
    .then(user => {
      req.user = user
      console.log("h1")
      next()
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb://localhost:27017/shop'
  )
  .then(result => {
    User.findOne()
      .then(user => {
        if (!user) {
          const user = new User({
            name: 'Sajith',
            email: 'Sajithcool@gmail.com',
            card: {
              items: []
            }
          })
          user.save()
        }
      })
    app.listen(3010, () => console.log("server is http://127.0.0.1:3010"));
  })
  .catch(err => {
    console.log(err);
  });

