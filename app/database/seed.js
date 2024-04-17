// app\database/seed.js
// to run this, cd to the folder that this is in 
// and type "node seed.js" in the terminal

import { openDb } from './db.js';

async function setup() {
  // Open SQLite connection
  const db = await openDb()
/*
  // Define table schema
  await db.exec(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,  
      username TEXT,
      email TEXT UNIQUE,
      password TEXT 
    );
  `)
    */
  // Insert dummy data
  await db.run(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    'Chris', 'chris@mail.com', 'password'
  )
  await db.run(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    'Larry', 'larry@mail.com', 'password'
  )
  await db.run(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    'Fred', 'fred@mail.com', 'password'
  )
  

 /* const tasks = [
    { title: 'Task 1', content: 'Content 1' },
    { title: 'Task 2', content: 'Content 2' },
    // Add more tasks as needed
  ];
  
  const query = 'INSERT INTO tasks (title, content) VALUES (?, ?)';
  const values = tasks.flatMap(task => [task.title, task.content]);
  
  await db.run(query, values);
*/
  
  // Close connection
  await db.close()  
}

setup()
  .catch(err => {
    console.error(err.message)
  })  