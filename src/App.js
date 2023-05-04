import './App.css';
import React, { useState, createContext } from 'react'
import Items from './components/item/items'
import AddItem from './components/addItem/addItem'
import Total from './components/total/total'

export const ProductsContext = createContext();

const App = () => {
  const [items, setItems] = useState([
    { id: 1, product: 'Pen', quantity: 5, price: 2 },
    { id: 2, product: 'Book', quantity: 6, price: 10 }
  ]);

  return (
    <ProductsContext.Provider value={{ items, setItems }}>
      <div className="container">
        <h1>Product List React App</h1>
        <div className="table">
          <Items />
          <AddItem />
          <Total />
        </div>
      </div>
    </ProductsContext.Provider>
  )
}

export default App;