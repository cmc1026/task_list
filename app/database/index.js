// pages/index.js

import { openDb } from './db.js';

export async function getServerSideProps() {

  // Open database
  const db = await openDb()

  // Get posts from database  
  const posts = await db.all('SELECT * FROM posts')

  // Pass posts as prop to component
  return {
    props: {
      posts
    }
  }
}

function Home({ posts }) {
  // Render UI with posts
}

export default Home