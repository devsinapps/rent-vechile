const express	 = require('express'),
	  bodyParser = require('body-parser'),
	  morgan	 = require('morgan'),
	  cors		 = require('cors'),
	  pg		 = require('pg');

//Make Default PORT
const PORT = 3001;
//PostgreSQL Query
const pool = new pg.Pool({
	post: 5432,
	user: 'admin',
	password: 'admin',
	database: 'rental_kendaraan',
	max: 10,
	host: 'localhost'
})

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));

//This code you can get from web https://enable-cors.org/server_expressjs.html
	//Just Copy and edit 
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Query Get Data From PostgreSQL Server
	//Make API Url

app.listen(PORT, () => console.log('Mysql Server on PORT 3001'));