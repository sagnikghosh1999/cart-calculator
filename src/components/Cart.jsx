import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const changeQty = (id, qty) =>
    dispatch({
      type: "CHANGE_CART_QUANTITY",
      payload: {
        id: id,
        qty: qty,
      },
    });

  const { cart } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, item) => acc + Number(item.price) * item.qty, 0)
    );
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "28vw",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.8rem 0",
          fontSize: "20px",
          fontWeight: "bolder",
        }}
      >
        Cart Items
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          {cart.map((item) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0",
                padding: "0.5rem",

                alignItems: "center",
                background: "#C0C2C9",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                <img
                  src={item.thumbnail}
                  style={{
                    height: "150px",
                    width: "200px",
                    objectFit: "cover",
                    margin: "5px",
                  }}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  ${item.price}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button onClick={() => changeQty(item.id, item.qty - 1)}>
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => changeQty(item.id, item.qty + 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          background: "black",
          color: "white",
          fontWeight: "bolder",
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          padding: "5px 10px",
          borderRadius: "20px",
        }}
      >
        <b style={{ alignSelf: "center" }}>Subtotal: $ {total}.00</b>
      </div>
    </div>
  );
};

export default Cart;
