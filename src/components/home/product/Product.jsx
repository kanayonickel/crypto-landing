import React, { useState } from 'react'
// import React from 'react'
import { products } from "../../assets/data/data"
import {Heading} from "../../common/Heading"
import { ProductItem } from './ProductItem'

export const Product = () => {
    const [data, setdata] = useState(products)
  return (
    <>
<section className="product">
    <div className="container">
      <Heading title='Trendings Products' desc='Check the hottest designs of the week. These rising stars are worth your attention' />
       
       <ProductItem data = {data} />
       {/* <ProductItem /> */}
    </div>
</section>
    </>
  )
}
