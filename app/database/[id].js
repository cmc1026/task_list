import { openDb } from './db.js';


async function handler(req, res) {

  // Get post ID from request URL
  const id = req.query.id

  // Get matching post from database
  const db = await openDb()
  const post = await db.get('SELECT * FROM tasks WHERE id = ?', [id])

  // Return result to client  
  res.status(200).json(post)

}

export default handler