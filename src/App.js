import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Account from "./pages/account/Account";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
