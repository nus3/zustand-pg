import { Link } from "@remix-run/react";

export default function IndexPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/normal-form">Normal Form</Link>
        </li>
        <li>
          <Link to="/zustand-form">Zunstand Form</Link>
        </li>
        <li>
          <Link to="/zustand-separated-form">Zunstand Separated Form</Link>
        </li>
      </ul>
    </div>
  );
}
