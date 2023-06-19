import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Sorry, nothing was found at this URL.</h1>
      <p>Here are a few pages you may find helpful:</p>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="components">Components</Link>
      </div>
      <div>
        <Link to="about">About</Link>
      </div>
    </div>
  );
}
