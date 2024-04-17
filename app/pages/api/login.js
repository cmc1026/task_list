//pages/api/login.js
import sqlite3 from 'sqlite3';
import { NextApiRequest, NextApiResponse } from 'next';

const dbPromise = new Promise((resolve, reject) => {
  const db = new sqlite3.Database('dev.db', (err) => {
    if (err) {
      reject(err);
    } else {
      resolve(db);
    }
  });
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const db = await dbPromise;

      db.get(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, row) => {
          if (err) {
            res.status(500).json({ error: 'An error occurred' });
          } else if (row) {
            res.status(200).json({ success: true });
          } else {
            res.status(401).json({ error: 'Invalid credentials' });
          }
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}