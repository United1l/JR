import { useState } from 'react'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <div className="home-card">
        <div className="nav">
          <div className="menu-box">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="cart-box">
            <i className="fa-solid fa-bag-shopping"></i>
            <h5>{cartItems}</h5>
          </div>
        </div>
        <div className="hero">
          <div className="greetings">
            <h4>Hi Owura</h4>
            <h6>Let's order some food and have a delicious day
            </h6>
          </div>
          <div className="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <h6>Search</h6>
          </div>
          <div></div>
        </div>
        <div className="body">

        </div>
      </div>
    </>
  )
}

export default App
