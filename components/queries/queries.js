// Creates a pool of connections for querying PostgresQL database.

// Require PostgresQL module from Node packages
const Pool = require('pg').Pool;
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

const getListings = (request, response) => {
	pool.query('SELECT * FROM listings ORDER BY user_id ASC', (error, results) => {
		if (error) {
		throw error
		}
		response.status(200).json(results.rows)
	})
}

module.exports = {
	getUsers,
	getListings,
}