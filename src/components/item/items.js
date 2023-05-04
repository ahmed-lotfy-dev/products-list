import React, { useContext } from 'react';
import { ProductsContext } from '../../App';

const Items = () => {
  const { items, setItems } = useContext(ProductsContext);

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const increaseQunatityHandler = (id) => {
    const foundItem = items.find((item) => item.id === id);
    if (foundItem.quantity > 1) {
      const newItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setItems(newItems);
    }
  };
  const decreaseQunatityHandler = (id) => {
    const foundItem = items.find((item) => item.id === id);
    if (foundItem.quantity > 1) {
      const newItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: 
            item.quantity - 1,
          };
        }
        return item;
      });
      setItems(newItems);
    }
  };
  let length = items.length;
  const ListItem = length ? (
    items.map((item, idx) => {
      return (
        <div key={idx} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <button className='btn' onClick={() => decreaseQunatityHandler(item.id)}>-</button>
          <p>{item.quantity}</p>
          <button className='btn' onClick={() => increaseQunatityHandler(item.id)}>+</button>
          <p className="delete" onClick={() => deleteItem(item.id)}>
            &times;
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );

  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Qunatity</p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;