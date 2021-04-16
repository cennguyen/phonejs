import React from "react";
import data from "./data";
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <button onClick={openMenu} className="sidebt">
            &#9776; 
          </button>
          <a className="brand" href="/">
             CenPhoneJS
          </a>
        </div>
        <div>
          <a href="/cart">Cart </a>
          <a href="/login">Login</a>
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
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <div className="price">{product.price}₫</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">
        All right reserved. Design by Cen Nguyen
      </footer>
    </div>
  );
}

export default App;
