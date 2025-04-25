import db from '../db/database.js';

export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

export const createUser = (userData) => {
  const { firstName, lastName, email, password } = userData;
  
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, password],
      function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({
            id: this.lastID,
            firstName,
            lastName,
            email
          });
        }
      }
    );
  });
};