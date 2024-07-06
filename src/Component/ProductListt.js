import React from "react";
class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title> Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                109.95
              </text>
            </svg>
            <div class="card-body">
              <p class="card-text">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday",
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Add to cart
                  </button>
                  
                <small class="text-body-secondary">men's Clothing</small>
              </div>
            </div>
          </div>
        </div>
        
          
      </div>
      </div>
    );
  }
}
export default ProductCard;
