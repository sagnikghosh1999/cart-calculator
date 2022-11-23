import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0",
          fontSize: "20px",
          fontWeight: "bolder",
        }}
      >
        Products
      </div>
      <div
        style={{
          width: "70vw",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              margin: "0 1rem",
              border: "2px solid gray",
              borderRadius: "7px",
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={product.thumbnail}
              alt="productimage"
              style={{
                height: "200px",
                width: "300px",
                objectFit: "cover",
                margin: "10px",
              }}
            />
            <div
              style={{
                height: "1px",
                background: "gray",
                width: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {product.title}
              </p>
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                ${product.price}
              </p>
            </div>
            {cart.some((p) => p.id === product.id) ? (
              <button
                style={{
                  width: "85%",
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px ",
                  marginTop: "5px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  border: "none",
                }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: {
                      id: product.id,
                    },
                  });
                }}
              >
                Remove From Cart
              </button>
            ) : (
              <button
                style={{
                  width: "85%",
                  backgroundColor: "green",
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px ",
                  marginTop: "5px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  border: "none",
                }}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      thumbnail: product.thumbnail,
                    },
                  });
                }}
              >
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
