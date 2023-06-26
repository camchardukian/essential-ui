import { Link } from "react-router-dom";
import { BASE_ROUTE } from "../../utils/constants";
export default function NotFound() {
  return (
    <div>
      <h1>Sorry, nothing was found at this URL.</h1>
      <p>Here are a few pages you may find helpful:</p>
      <div>
        <Link to={`${BASE_ROUTE}`}>Home</Link>
      </div>
      <div>
        <Link to={`${BASE_ROUTE}/components`}>Components</Link>
      </div>
      <div>
        <Link to={`${BASE_ROUTE}/about`}>About</Link>
      </div>
    </div>
  );
}
