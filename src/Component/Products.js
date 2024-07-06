import "./footer.css";
import "./Products.css";
import React from "react";
import Data from "./Apioutput.json";
import addToCart  from "./Cart";
function Products() {
  return (
    <div className="box">
      {Data.map((item) => {
        return (
          
          <div
            className="nestedBox"
            style={{
              
              width: "500px",
              height: "600px",
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              
              borderRadius: "30px",
            }}
          >
            <div className="inner">
            <div>
                <img src={item.image} alt="product" style={{ width: "300px", height: "300px" ,}} className="Image" />  
            </div>
           <p className="para"> {item.title} </p>
            <p className="Cpara">{item.category}</p>
             <p> Rs {item.price}</p>
           
             <button className="btn" onClick={() =><addToCart item={item} />}>Add to Cart</button>
             </div>
          </div>

        );
      })}
    </div>
  );
}

export default Products;
