function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQantity = Function.prototype,
    decQantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {name}{" "}
      <i
        className="material-icons basket-qantity"
        onClick={() => decQantity(id)}
      >
        remove
      </i>{" "}
      x{quantity}
      <i
        className="material-icons basket-qantity"
        onClick={() => incQantity(id)}
      >
        add
      </i>
      ={price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}
export { BasketItem };
