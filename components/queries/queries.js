// Creates a pool of connections for querying PostgresQL database.

// Require PostgresQL module from Node packages
var pg = require('pg');
delete pg.native;
const Pool = pg.Pool;
// Create a new connection from Pool
const pool = new Pool({
	// Enter username here:
	user: 'postgres',
	// Enter server address here
	host: 'localhost',
	// Enter which database you'd like to connect to
	database: 'postgres',
	// Enter password here
	password: 'T3am06S19p0st!',
	// Enter which port PostgresQL is using
	port: '5432',
})

const getUsers = (request, response) => {
	pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
		if (error) {
		throw error
		}
		response.status(200).json(results.rows)
	})
}

// const getListingsfun = function(zipcode, filter){
	
// 	pool.query(`SELECT * FROM listings`, (error, results) => {
// 		if (error) {
// 		throw error
// 		}
// 		response.status(200).json(results.rows)
// 	})
// }

const getListings = (request, response) => {
	  const zipcode = parseInt(request.params.zipcode);
	 const filter = request.params.filter;
	var userid = 1;
	//var zipcode = 94132;

	pool.query(`SELECT street_address, city, zip_code, state, images, home_type, price FROM listings WHERE zip_code = '${zipcode}' AND home_type = '${filter}'`, (error, results) => {
		if (error) {
		throw error
		}
		response.status(200).json(results.rows)
	})
}

const getAllListings = (request, response) => {
	pool.query('SELECT street_address, city, zip_code, state, images, home_type, price FROM listings', (error, results) => {
		if (error) {
		throw error
		}
		response.status(200).json(results.rows)
	})
}

module.exports = {
	getUsers,
	getListings,
	getAllListings,
}