import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Products.css'
import { useStatenpm  } from 'react';
function Products() {
  return (
  <section className="product-section">
  <div className="container">
    <h2>Our Products</h2>
    <div className="product">
      <img src="https://image3.jdomni.in/banner/30072021/1B/F3/C9/36A197F7A0BD5CB113A6308BBF_1627625830858.jpeg?output-format=webp" alt="4 Inch Bricks" />
      <h3>4 Inch Bricks</h3>
      <p>Used for building compound walls.</p>
    </div>
    <div className="product">
      <img src="https://content.jdmagicbox.com/comp/tirupur/t8/9999px421.x421.191231142605.d3t8/catalogue/popular-solid-blocks-mangalam-tirupur-hollow-block-manufacturers-b2a42q4kb5-250.jpg" alt="6 Inch Bricks" />
      <h3>6 Inch Bricks</h3>
      <p>Used for building rooms.</p>
    </div>
  </div>
</section>
);
  
}

export default Products