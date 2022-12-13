import React from 'react'
//! Do not need external package comes with create-react-app...
import PropTypes from 'prop-types'
//! importing image
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  //! Second way assign a default value is using OR operator
  //! But problem is again in img.url because it will always coming undefined.

  return (
    <article className='product'>
      <img src={image?.url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  )
}
//! we have to setup propTypes property on the component.
//! with setup below we do not need to manually check because now we can see an error in the console
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
//! we can setup default props because simply we do not wanna get error
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   //! We import an image from assets folder and if the image is missing by default we will setup this imported image...
//   //! But now problem is in JSX above we used image.url but below there is no URL so we need to fix it with using short circuit operator.
//   image: defaultImage,
// }

export default Product

//! Here we see that in API all the objects have some kind of price but the last one displays nothing because it is not there.
//! API are not always guaranteed some kind of value
//! What even worse is we have the image it setted as an object and in the object we are looking for the URL. If we try to access the URL property on the image that is undefined we will get a error.
//! It is enough to get error if just only one item did not have that property. Because we are checking property in the object.
