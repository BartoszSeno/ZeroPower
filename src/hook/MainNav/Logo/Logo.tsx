import { Link } from "react-router-dom";
function Logo() {
  return (
    <>
      <li>
        <Link to="/">
          <div className="logo-zp-nav">ZeroPower</div>
        </Link>
      </li>
    </>
  );
}

export default Logo;
