import React, { useEffect, useState } from 'react'
import Item from '../Item';
import "./LayoutFlex.scss"

function LayoutFlex() {

  const [data, setData] = useState(); 

  async function renderData() {
    let response = await fetch('https://dummyjson.com/products')
    let res = await response.json();
    setData(res)
    return res
  }

  useEffect(() => {
    renderData();
  }, [])

  return (
    <div className="container-custom ">
      <div className='grid-custom'>
      {data?.products?.map((el,index) =>
        <Item product = {el} key={index}/>
      )}
      </div>
    </div>
  )
}

export default LayoutFlex