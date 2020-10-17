import pool from './pool';
import bcrypt from 'bcryptjs';

pool.on('connect', () => {
    console.log('connected to the db');
  });
  

const createUserTable = () => {
    const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
    (user_id SERIAL PRIMARY KEY, 
    email VARCHAR(100) UNIQUE NOT NULL, 
    name VARCHAR(100) NOT NULL, 
    password VARCHAR(100), 
    phone_number VARCHAR(100) UNIQUE NOT NULL)`;
  
    pool.query(userCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
};


const insertAdminCredentials = () => {
    console.log('Inserting into users');
    const password = bcrypt.hashSync('Magic123@');
    console.log(password);

    const insertAdminCreateQuery = `INSERT INTO users 
    (user_id, email, name, password, phone_number) VALUES (0,'admin@p2a.com', 'admin','${password}','5717788434')`;
  
    pool.query(insertAdminCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
};

const dropUserTable = () => {
    const usersDropQuery = 'DROP TABLE IF EXISTS users';
    pool.query(usersDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
    });
};

const createAllTables = () => {
    createUserTable();
};

const dropAllTables = () => {
    dropUserTable();
};

pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});

export {
    createAllTables,
    dropAllTables,
    insertAdminCredentials
};
require('make-runnable');
