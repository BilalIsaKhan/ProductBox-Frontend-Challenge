import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";


function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
