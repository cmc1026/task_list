// update a task

import { openDb } from './db.js';

async function handler(req, res) {
  
  // Get ID and new title/content from body
  const { id, title, content } = req.body

  // Update matching record in database
  const db = await openDb()
  await db.run(
    `UPDATE tasks SET 
     title = ?, 
     content = ?  
     WHERE id = ?`,
    [title, content, id]
  )
  await db.close()
  
  // Return result to client
  res.status(200).json({ message: 'Post updated' })

}

export default handler  