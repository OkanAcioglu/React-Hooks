import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
//! We have 12 item in the list and if we check the console when we keep on clicking values are keep on increasing.
//! Each and every time we click a button we change the count value with useState (cause re-render)
//! And in the BigList component which we use map() function also re-render.
//! Solution is memo function (method) comes with React. Do not confuse it with useMemo.
//! Use React.memo() and wrap the all logic into the paranthesis.
//! Now when we click the button we are not calling the useEffect each and every time. Because memo is checking (memorizing) what is the value in the props. If the props value did not change, then we are not triggering the re-render. Remember everytime the props or state changes component re-renders. But here we triggering re-render with count and using React.memo what we do is checking did the values of the props changing or it is exactly the same. For this case it is same. So React decide that there is no need to re-render the component.
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} />
    </>
  )
}

const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log('big list called')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = ({ fields }) => {
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
    </article>
  )
}
export default Index
