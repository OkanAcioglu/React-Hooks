import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
//! useMemo ,unlike the useCallback which remembers the function, deals with a value.
//! Do not mix that React.memo looking for the props and see whether the props change however useMemo is specifially for the value.
//! For this purpouse lets create a function that calculate the most expensive value as far as in the products.
const calculateMostExpensive = (data) => {
  //! below function returns a value and suppose took long time to calculate
  //! and everytime we click the count, we calling the hello
  //! It will be good to remember that value and only re-calculate it when the data is changed and for that we will use useMemo...
  console.log('hello')
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])
  //! create variable with useMemo
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  )
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}> cart : {cart}</h1>
      {/* <h1>Most Expensive = ${calculateMostExpensive(products)}</h1> */}
      {/* //! pass the created variable using useMemo */}
      {/* //! Now everythink is the same but when we clicked the count no more hello on the console */}
      <h1>Most Expensive = ${mostExpensive}</h1>
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
