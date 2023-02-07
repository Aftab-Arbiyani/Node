const db = require('../util/database');

module.exports = class Employee {
	constructor(id, name, email, designation) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.designation = designation;
  }

  save () {
  	const currentDate = new Date();
  	if (!this.id) {
      return db.execute('INSERT INTO employee (name, email, designation, created_date) VALUES (?,?,?,?)',
          [this.name, this.email, this.designation, currentDate]
        );
    } else {
    	return db.execute("UPDATE `employee` SET `name` = ?, `email` = ?, `designation` = ?,`updated_date` = ? WHERE `id` = ?",
            [this.name,this.email,this.designation,currentDate,this.id]
            );
    }
  }

  static fetchAll() {
    return db.execute("SELECT * from `employee`;");
  }

  static load(id) {
  	return db.execute("SELECT * from employee WHERE employee.id = ?;", [id]);
  }

  static delete(id) {
    return db.execute("DELETE from employee WHERE employee.id = ?;", [id]);
  }

};