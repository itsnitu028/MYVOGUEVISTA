import React from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react'
const Popular = () => {

  const [popularinwomen,setPopular_in_women]=useState([]);

  useEffect(()=>{
    fetch('https://voguevista-backend.onrender.com/newcollections/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopular_in_women(data));
},[])
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {popularinwomen.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
