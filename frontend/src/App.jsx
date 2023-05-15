import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Components/Product/Product";
import Admin from "./Components/Admin/Admin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Product />} />
          <Route path="/AdminPanel" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
