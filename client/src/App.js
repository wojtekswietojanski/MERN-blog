import "./App.css";
import Layout from "./Layout.js";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/loginPage.js";
import IndexPage from "./components/indexPage.js";
import RegisterPage from "./components/registerPage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
