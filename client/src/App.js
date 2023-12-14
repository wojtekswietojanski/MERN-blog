import "./App.css";
import Layout from "./Layout.js";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/indexPage.js";
import RegisterPage from "./components/registerPage.js";
import LoginPage from "./components/loginPage.js";
import PostCreate from "./components/postCreate.js";
import { UserContextProvider } from "./userContext.js";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<PostCreate />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
