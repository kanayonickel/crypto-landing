import React from 'react'
import {ImQuotesRight} from "react-icons/im"
import { customer } from '../../assets/data/data'
import { Heading } from '../../common/Heading'

export const Testimonial = () => {
  return (
    <>
    <section className="customer">
    <Heading  title='Choose the plans' desc='Meet our newbies! The latest Stuff always uploaded to the marketplace' />
    <div className="content">
        {customer.map((items) => (
           <div className="card">
               <button>
                   <ImQuotesRight />
               </button>
               <p>"{items.desc}"</p>
               <h3>{items.name}</h3>
               <span>{items.post}</span>
           </div>

        ))}
    </div>
    </section> 
    </>
  )
}
 