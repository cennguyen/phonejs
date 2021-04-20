import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <button onClick={openMenu} className="sidebt">
              &#9776;
            </button>
            <Link className="brand" to="/">
              CenPhoneJS
            </Link> 
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            <Link to="/signin"> Login</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <a href="index.html">Phone</a>
            <ul>
              <li>
                <a href="index.html">Apple</a>
              </li>
              <li>
                <a href="index.html">Samsung</a>
              </li>
              <li>
                <a href="index.html">Nokia</a>
              </li>
              <li>
                <a href="index.html">HTC</a>
              </li>
              <li>
                <a href="index.html">Asus</a>
              </li>
            </ul>
            <a href="index.html">Tablet</a>
            <ul>
              <li>
                <a href="index.html">Apple</a>
              </li>
              <li>
                <a href="index.html">Samsung</a>
              </li>
              <li>
                <a href="index.html">Nokia</a>
              </li>
              <li>
                <a href="index.html">HTC</a>
              </li>
              <li>
                <a href="index.html">Asus</a>
              </li>
            </ul>
            <a href="index.html">Others</a>
            <ul>
              <li>
                <a href="index.html">Kindle</a>
              </li>
              <li>
                <a href="index.html">Laptop</a>
              </li>
            </ul>
          </ul>
        </aside>
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer className="row center">
          All right reserved. Design by Cen Nguyen
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
