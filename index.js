const express = require('express')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var userRoute = require('./routes/user.route')
var authRoute = require('./routes/auth.route')
var authMiddleware = require('./middleware/auth.middleware')


const app = express()
const port = 3000

// Khoi tao thu muc goc cua app
app.set('view engine', 'pug')
app.set('views', './views')

// Khoi tao cho req.body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

app.use(express.static('public'))

app.get('/', function(req, res){
	return res.render('index', {
		name: 'World'
	})
})

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);


app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`)
})
