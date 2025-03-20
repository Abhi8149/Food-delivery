import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const MyOrder = () => {
  const [orderdata, setorderdata] = useState({})


  const fetchdata = async () => {
    let userEmail = localStorage.getItem('useremail')
    let response = await fetch('http://localhost:3000/api/myorderdata', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmail
      })
    })
    let data = await response.json()
    setorderdata(data)
  }

  
  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <>
      <div className='bg-gray-100'>
        <Navbar />
      </div>
          <div>
           {
            orderdata!={}?Array(orderdata).map((data)=>{
              return(
                data.orderdata?data.orderdata.order_data.slice(0).reverse().map((item)=>{
                 return(
                  item.map((arrayData)=>{
                    return(

                    
                      <div class="bg-white rounded-lg shadow-md p-4">
                      {arrayData.Order_date ? (
                        <div>
                          <p class="text-gray-500">{data=arrayData.Order_date}</p>
                          <hr class="my-2 border-gray-300" />
                        </div>
                      ) : (
                        <div>
                          <h1 class="text-xl font-semibold">{arrayData.name}</h1>
                          <p class="text-gray-600">Quantity: {arrayData.qty}</p>
                          <p class="text-gray-600">Price: {arrayData.price}</p>
                          <p class="text-gray-600">Size: {arrayData.size}</p>
                          <p class="text-gray-500">{data}</p>
                        </div>
                      )}
                    </div>
                    
                    )


                  })
                 )
                }):""
              )
       
            }):""
           }
          </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default MyOrder
// {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}

