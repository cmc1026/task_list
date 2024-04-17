// to insert a new post into the database

import { openDb } from './db.js';

async function handler(req, res) {

  // Get post data from request body  
  const { title, content } = req.body

  // Insert post into database
  const db = await openDb()
  const result = await db.run(
    'INSERT INTO tasks (title, content) VALUES (?, ?)', 
    [title, content]
  )
  await db.close()
  
  // Return result to client
  res.status(201).json(result)
}

export default handler