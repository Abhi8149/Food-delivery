import React from 'react'
// import Delete from '@material-ui/icons/Delete'
// import ContextReducer from "../components/ContextReducer"
import { useCart,useDispatch } from '../components/ContextReducer';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatch();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }

  const handleCheckOut=async()=>{
    let userEmail=localStorage.getItem('useremail')
    const response = await fetch("http://localhost:3000/api/orderdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          email:userEmail,
          order_data:data,
          order_date: new Date().toDateString()
      })
  });
  if(response.status===200){
    dispatch({type:"DROP"})
  }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
<div className="p-4">
  <table className="table w-full border border-orange-700 shadow-md rounded-lg">
    <thead className="bg-blue-500 text-white">
      <tr>
        <th className="px-4 py-2">#</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Quantity</th>
        <th className="px-4 py-2">Option</th>
        <th className="px-4 py-2">Amount</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>
    <tbody>
      {data.map((food, index) => (
        <tr key={index} className="hover:bg-blue-100">
          <td className="px-4 py-2">{index + 1}</td>
          <td className="px-4 py-2">{food.name}</td>
          <td className="px-4 py-2">{food.qty}</td>
          <td className="px-4 py-2">{food.size}</td>
          <td className="px-4 py-2">{food.price}</td>
          <td className="px-4 py-2">
            <button
              type="button"
              className="text-red-500 hover:underline"
              onClick={() => {
                dispatch({ type: "REMOVE", index: index });
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className="mt-4">
    <h1 className="text-xl font-semibold">Total Price: {totalPrice}/-</h1>
  </div>
  <div className="mt-4">
    <button onClick={handleCheckOut} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Check Out
    </button>
  </div>
</div>

  
  )
}