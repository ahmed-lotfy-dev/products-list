import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../App';

const Total = () => {
  const { items } = useContext(ProductsContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [items]);

  return (
    <div>
      <p className="text">Total Price: {totalPrice}</p>
    </div>
  );
};

export default Total;