import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Home from './pages/Home';
import Search from "./pages/Search";
function App() {
  console.log("app rendered")
  return (

    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/products/:search" element={<Search/>} />
          </Routes>
        </Router>
      </PageContainer>

    </div>
  );
}

export default App;
