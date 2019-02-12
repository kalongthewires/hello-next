import { Navigation } from "../components";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
