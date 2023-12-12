import Header from "./components/header.js";
import FotoBanner from "./components/fotoBanner.js";
import { Outlet } from "react-router-dom";

export default function Layout() {
  console.log("Rendering Layout component");
  return (
    <main>
      <Header />
      <FotoBanner />
      <Outlet />
    </main>
  );
}
