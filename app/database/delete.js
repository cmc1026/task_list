// to delete a task

import { openDb } from './db.js';

async function handler(req, res) {

  // Get ID from request body  
  const { id } = req.body

  // Delete matching record from database
  const db = await openDb()
  await db.run('DELETE FROM posts WHERE id = ?', [id])
  await db.close()

  // Return result to client
  res.status(200).json({ message: 'Post deleted' })

}

export default handler