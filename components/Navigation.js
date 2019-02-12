import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link href="about">
            <button>About</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
