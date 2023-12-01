export function Header() {
  return (
    <header>
      <h1 className="text-4xl font-bold">Steven&apos;s Store</h1>
      <nav className="bg-yellow-400 rounded-full p-2">
        <a className="p-2 hover:bg-blue-200" href="#">
          All Games
        </a>
        |
        <a className="p-2 hover:bg-blue-200" href="#">
          Games by Category
        </a>
        |
        <a className="p-2 hover:bg-blue-200" href="#">
          My Account
        </a>
        |
        <a className="p-2 hover:bg-blue-200" href="#">
          Logout
        </a>
      </nav>
    </header>
  );
}
