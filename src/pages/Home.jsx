import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="login">login</Link> |{" "}
        <Link to="registration">register</Link> |{" "}
        <Link to="/dash-board">Dashboard</Link>
      </nav>
    </div>
  );
}

export default Home;
