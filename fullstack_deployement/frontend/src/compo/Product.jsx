import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';
function Product() {
const [product, setProduct] = useState([]);

useEffect(()=>{
  axios.get("https://dummyjson.com/products").then((response)=>{
    setProduct(response.data.products);
  }).catch((error)=>{
    console.error("Error fetching jokes:", error);
  });
})
  return (
    <>
      <h1 style={{textAlign:"center",color:"white"}}>Full Stack Development</h1>
      {
     <div className="product-grid">
        {product.map((item) => (
          <div key={item.id} className="product-card">
            <img 
              src={item.images[0]} 
              alt={item.title} 
              className="product-image"
            />
            <h3>{item.title}</h3>
            <p><b>Price:</b> ${item.price}</p>
          </div>
        ))}
      </div>
      }
    </>
  )
}

export default Product;
