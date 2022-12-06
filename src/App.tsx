import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sneaker/:sneakerId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
