const mysql = require('mysql2');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'nodejs',
	password: '',
})

pool.execute('CREATE TABLE IF NOT EXISTS `employee` (`id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `designation` VARCHAR(255) NOT NULL, `created_date` DATETIME NOT NULL, `updated_date` DATETIME NULL);', (err) => {
	if (err) {
		console.log(err);
	}
});

module.exports = pool.promise();