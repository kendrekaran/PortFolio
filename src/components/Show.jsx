import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Show = () => {

    const [products, setProducts] = useState([])
    const getProducts = () =>{
    const API = "https://fakestoreapi.com/products"
    axios.get(API)
    .then(products =>{
      console.log(products)
      setProducts(products.data)
    }).catch(err => console.log(err))
  }


  return (
    <div>

    <button onClick={getProducts} className='px-5 py-2 bg-red-300 rounded'>
    Call Product API
    </button>  
      <br /> <br />
        <ul>
        {products.length > 0 ? products.map(p => <li key={p.id} className=' mb-2 p-5 bg-red-200 '>{p.title}</li>) : <h2>Loading...</h2> }
      </ul>
    </div>
  )
}

export default Show