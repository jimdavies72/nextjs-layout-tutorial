import React from 'react'

const ProductDetails = ({ 
  params, 
}: { 
  params: { productid: string }
}) => {
  return (
    <div>
      <h1 className='text-white'>Product Details {params.productid}</h1>
    </div>
  )
}

export default ProductDetails
