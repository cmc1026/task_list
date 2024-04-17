//pages/index.js
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  // Check if the user is logged in
  // If not, redirect to the login page

  return (
    <div>
      <h1>Welcome!</h1>
      {/* Main page content */}
    </div>
  );
}