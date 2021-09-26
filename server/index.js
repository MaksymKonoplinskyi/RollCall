require('dotenv').config()

const express = require('express')
// const session = require("express-session")//////

const seqelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000 

const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./passport-setup');
// require('./auth'); 
// const isLoggedIn = require('./middleware/authMiddleware')
const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
  // headers: {"Access-Control-Allow-Origin" :'http://localhost:3000'}
  // headers: { "Access-Control-Allow-Origin": '*' }
} 




const app = express()

app.use(cors(corsOptions)) 
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });


// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });      

// app.use('trust proxy', 1) //trust first proxy   
 

app.use(express.json())
app.use('/api', router)
// Access-Control-Allow-Origin: http://localhost:3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
  name: 'tuto-session',
  keys: ['key1', 'key2']
}))

// Auth middleware that checks if the user is logged in
// const isLoggedIn = (req, res, next) => {
//     if (req.user) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// }
// app.use(session({ secret: "cats" }));//// 
// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

 
// Обработка шибок в конце
app.use(errorHandler)

 


 
  



// Example protected and unprotected routes
app.get('/', (req, res) => res.send('Example Home page! <a href="/google"> Authenticate with Google</a>'))
// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user

app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))
//${req.user.displayName} ${req.user.email}



app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/'); //'/good'
  }
);
// app.get('/google/callback',
//   passport.authenticate('google', {
//     successRedirect: '/good',
//     failureRedirect: '/auth/failed' 
//   })
// );



app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

//app.listen(5000, () => console.log(`Example app listening on port ${5000}!`))





const start = async () => {
  try {
    await seqelize.authenticate()
    await seqelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}
start()
//// https://www.youtube.com/watch?v=o9e3ex-axzA  гугл авторизация