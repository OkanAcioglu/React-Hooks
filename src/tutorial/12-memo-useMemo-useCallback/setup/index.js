import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
//! We create a addToCart functionality and there is a issue that when we click to addToCart we are re-render all the items.
//! What happens is that when we trigger the re-render with useState and everytime we create the addToCart function from scratch.
//! Solution is useCallback which essentially does the same think as React.memo but now it is deal with function. It is check has the value of the function changed. If it is not changed, React will not create this function from scratch.
//! call useCallback hook and pass in the function and also do not forget to add dependencies array.
//! with dependency array each and every time we update the cart value we want also create the function.
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  //! Lets create a new state
  const [cart, setCart] = useState(0)

  //! And also addToCart function and pass it to down
  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}> cart : {cart}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('big list called')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('single item called')
  })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
