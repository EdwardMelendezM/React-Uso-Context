const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h3>{name}</h3>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delFromCart(id)}>Eliminar</button>
      <button onClick={() => delFromCart(id, true)}>Eliminar todo</button>
    </div>
  );
};

export default CartItem;
