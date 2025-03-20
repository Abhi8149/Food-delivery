import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 space-y-10'>
      <div className="box1 h-96 w-full flex justify-around bg-black text-white my-2 p-10 ">
        <div className="gofood ">
        <h1 className='text-2xl my-5'>Go food</h1>
        <p>About</p>
        <p>Career</p>
        <p>Team</p>
        <p>More branches</p>
        </div>
        <div className="company">
        <h2 className='text-2xl my-5'>Company</h2>
        <p>Help & support</p>
        <p>Team with us</p>
        <p>Ride with us</p>
        
        <div className="legal ">
          <h2 className='text-2xl my-5'>Legal</h2>
          <p>Terms and condition</p>
          <p>Cookie policy</p>
          <p>Privacy policy</p>
          <p>Investor Relation</p>
        </div>
        </div>
        <div className="deliver">
        <h2 className='text-2xl my-5'>We deliver to:</h2>
        <p>Banglore</p>
        <p>Delhi</p>
        <p>Gurgoan</p>
        <p>Pune</p>
        <p>Mumbai</p>
        </div>

      </div>
    </div>
  )
}

export default Footer

