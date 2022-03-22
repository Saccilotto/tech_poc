const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql://root:cheet%4010@127.0.0.1:3306/ucon');

try {
    sequelize.authenticate().then();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
//sequelize.close()

const students = sequelize.define('students', {
  // Model attributes are defined here
  users_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  graduation_semester: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  educational_institutions_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  courses_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
  createdAt: false,
  updatedAt: false
});


// `sequelize.define` also returns the model
students.findAll().then(x => console.log(x)); // true
