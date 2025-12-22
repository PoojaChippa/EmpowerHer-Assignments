import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h2>Welcome to Home Page</h2>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;
