import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/signup-employee">
        <p>EMPLOYEE</p>
      </Link>
      <Link to="/signup-admin">
        <p>ADMIN</p>
      </Link>
    </div>
  );
}

export default Home;
