/**
 * Connection Sample:
 */

 const { Sequelize } = require('@sequelize/core');

 // Option 1: Passing a connection URI
    //  const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
    //  const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
 
 // Option 2: Passing parameters separately (sqlite)
    // const sequelize = new Sequelize({
    // dialect: 'sqlite',
    // storage: 'path/to/database.sqlite'
    // });
 
 // Option 3: Passing parameters separately (other dialects)
 const sequelize = new Sequelize('database', 'username', 'password', {
   host: 'localhost',
   dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
 });


/**
 * Testing connection sample: 
*/ 
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

/** 
 * Closing connection
*/

// sequelize.close()

/** 
 * Logging samples
*/

// const sequelize = new Sequelize('sqlite::memory:', {
//     // Choose one of the logging options
//     logging: console.log,                  // Default, displays the first parameter of the log function call
//     logging: (...msg) => console.log(msg), // Displays all log function call parameters
//     logging: false,                        // Disables logging
//     logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
//     logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages
//   });
