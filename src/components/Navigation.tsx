import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-[50px] flex">
      <span className="">React 2022</span>
      <span>
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
}
