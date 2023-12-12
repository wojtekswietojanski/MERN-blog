import "./App.css";
import Post from "./components/post.js";
import Layout from "./Layout.js";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/loginPage.js";
import IndexPage from "./components/indexPage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
