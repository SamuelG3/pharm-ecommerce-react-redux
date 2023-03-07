import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
