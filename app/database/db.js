// This creates a connection to a SQLite database named mydb.db in the root folder of our project.
// If the file does not exist, SQLite will automatically create it when opening a connection.

// **Note: This openDb() method provides access to the database connection from anywhere in our app.

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open SQLite database connection
export async function openDb() {
  return open({
    filename: './mydb.db',
    driver: sqlite3.Database
  })  
}