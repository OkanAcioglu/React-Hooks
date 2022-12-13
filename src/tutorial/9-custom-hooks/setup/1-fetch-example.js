import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  //! Here we need to destructure object because we return a object from useFetch custom hook.
  const { loading, products } = useFetch(url)
  //! Here we have same result but functionality yucked away in a custom hook...
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
