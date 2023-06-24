import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <div>
        Here&apos;s an example of a{" "}
        <Link to="/page-does-not-exist">broken link</Link>
      </div>
    </div>
  );
}
