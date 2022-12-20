import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }, [url])
  //??? Below we have an warning that saying "useEffect has a missing dependency: "getProducts". Either include it or remove dependency".
  //??? If we set getProducts as a dependencies, we will create this function from scratch every re-render which will cause infitinite loop.
  //??? Solution is useCallback...
  //??? Once we create the useCallback we can now add the getProducts to the dependencies...
  useEffect(() => {
    getProducts()
  }, [url, getProducts])
  return { loading, products }
}

//! Custom Hooks allow us to reuse the the functionality (fetching data , saving local storage...)
//! This is a only one example of custom hooks but there are many custom hooks already preapered by other and also we can built our own custom hooks...
//! Our purpouse here is reuse the fetch functionality so that we do not need to duplicate the codes again and again when we need to fetch data...
//! Note that especially for this example if we want to use this hook we need to add error cases...

//!!! When we creating custom hook we need to "use" in front of the naming... Either function needs to be a component or it needs to be a custom hook.
