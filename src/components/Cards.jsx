import React, { useEffect } from 'react'
import { useState,useRef } from 'react'
import { useDispatch,useCart } from './ContextReducer'

const Cards = (props) => {
    let state=useCart()
    let dispatch=useDispatch()
    const priceref=useRef()
    let food = props.foodoptions
    let selectedoptions = Object.keys(food)
    const [qty, setqty] = useState(1)
    const [size, setsize] = useState('')

    const handleclick=async()=>{
       await dispatch({type:"ADD", id:props.foodname._id, name:props.foodname.name, price:finalPrice, qty:qty, size:size})
       console.log(state)
    }
    useEffect(() => {
      setsize(priceref.current.value)
    }, [])
    

    let finalPrice=qty*parseInt(food[size])
    return (

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-red-500 dark:border-gray-700">
  <a href="#">
    <div className="rounded-t-lg overflow-hidden" style={{ height: '200px' }}> {/* Set a fixed height */}
      <img src={props.foodname.img} alt="" className="w-full h-full object-cover" />
    </div>
  </a>
  <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.foodname.name}
    </h5>

    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      <span className="m-5">
        Quantity:
        <select name="" id="" onChange={(e) => setqty(e.target.value)}>
          {Array.from(Array(6), (e, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </span>

      <select name="" id="" ref={priceref} onChange={(e) => setsize(e.target.value)}>
        {selectedoptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </p>

    <div>
      <p>{props.foodname.description}</p>
    </div>

    <div>
      Price<strong>₹{finalPrice}/-</strong>
    </div>

    <div>
  <button onClick={handleclick} className="bg-green-700 text-cyan-200 p-2 my-3 hover:bg-green-900">
    Add to cart
  </button>
</div>

  </div>
</div>

    )
}

export default Cards
