const express = require('express')
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user.route')

const app = express()
const port = 3000







// Khoi tao thu muc goc cua app
app.set('view engine', 'pug')
app.set('views', './views')

// Khoi tao cho req.body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function(req, res){
	return res.render('index', {
		name: 'AAA'
	})
})

app.use('/users', userRoutes);


app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`)
})