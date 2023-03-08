import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/footer/Newsletter";
import { Header } from "./components/header/Header";
import Account from "./pages/account/Account";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

const App = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </>
  );
};
export default App;
