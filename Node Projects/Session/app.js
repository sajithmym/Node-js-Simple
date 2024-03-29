const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongodbStore = require('connect-mongodb-session')(session)

const errorController = require('./controllers/error');
const User = require('./models/user');

const The_Uri = 'mongodb://localhost:27017/shop'

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

const Store = new MongodbStore({
  uri: The_Uri,
  collection: 'sessions'
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({ secret: 'my secret', resave: false, saveUninitialized: false, store : Store })
);

app.use((req, res, next) => {
  User.findById('6496a7a627645439c43ec456')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    The_Uri
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Sajith',
          email: 'Sajithcool@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(8050, () => console.log("Server in http://127.0.0.1:8050"));
  })
  .catch(err => {
    console.log(err);
  });
