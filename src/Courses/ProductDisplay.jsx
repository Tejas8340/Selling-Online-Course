import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const desc = "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs. Learn the latest technologies, including Javascript, React, Node and even Web3 development. Build fully-fledged websites and web apps for your startup or business.";

const ProductDisplay = ({ item }) => {
  // console.log(item);
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  }

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  }

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon
    }
    // console.log(product);

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];


    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product)
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));

    setQuantity(1);
    setCoupon("");
  }
  return (
    <div>
      <div>
        <h4>{name}</h4>

        <h4>Rs {price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>



          <div className='cart-plus-minus'>
            <div className='dec qtybutton' onClick={handleDecrease}>-</div>
            <input type="text" className='cart-plus-minus-box' name='qtybutton' id="qtybutton" value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
            <div className='inc qtybutton' onClick={handleIncrease}>+</div>
          </div>

          <div className='discount-code mb-2'>
            <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
          </div>

          <button type='submit' className='lab-btn'>
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className='lab-btn bg-primary'>
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay
