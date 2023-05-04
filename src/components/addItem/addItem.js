import React, { useContext, useRef, useState } from "react"
import { ProductsContext } from "../../App"

const AddItem = () => {
  const [product, setProduct] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const { items, setItems } = useContext(ProductsContext)

  const productInputRef = useRef(null)
  const priceInputRef = useRef(null)
  const quantityInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()

    const isExisted = items.find((item) => item.product === product)

    if (!product || !price || !quantity) {
      return
    }
    if (isExisted) {
      alert(`${product} already exists in the list.`)
      return
    }
    const item = { id: items.length + 1, product, quantity, price }
    setItems([...items, item])

    // Clear the input fields
    setProduct("")
    setPrice("")
    setQuantity("")
    productInputRef.current.value = ""
    priceInputRef.current.value = ""
    quantityInputRef.current.value = ""
  }

  return (
    <div className="item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Product"
          id="product"
          ref={productInputRef}
          onChange={(e) => {
            setProduct(e.target.value)
          }}
          required
        />
        <input
          type="number"
          placeholder="Enter Price"
          id="price"
          ref={priceInputRef}
          onChange={(e) => {
            setPrice(+e.target.value)
          }}
          required
        />
        <input
          type="number"
          placeholder="Enter Quantity"
          id="quantity"
          ref={quantityInputRef}
          onChange={(e) => {
            setQuantity(+e.target.value)
          }}
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddItem