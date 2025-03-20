import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


const Home = () => {
  const [search, setsearch] = useState('')
  const [Fooddata, setFooddata] = useState([]);
  const [Foodcatagory, setFoodcatagory] = useState([]);

  const slides = [
    {
      url: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      url: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
      url: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      url: 'https://images.pexels.com/photos/22435655/pexels-photo-22435655/free-photo-of-shrimp-biryani.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const loaddata = async () => {
    let response = await fetch("http://localhost:3000/api/FoodData", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    })
    response = await response.json()
    // console.log(response[0], response[1])
    setFooddata(response[0])
    setFoodcatagory(response[1])
  }

  useEffect(() => {
    loaddata();
  }, [])


  return (
<div>
  <Navbar />


    {/* <input className='w-[600px] mx-[450px] my-96 p-1 rounded-sm' type="search" value={search} onChange={(e) => { setsearch(e.target.value) }} /> */}
  
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

  <div className="flex flex-col space-y-4">
    {
      Foodcatagory.map((item) => (
        <div className="mx-7" key={item._id}>
          <div className='font-sans text-6xl font-bold mb-4'>{item.CategoryName}</div>
          <hr />
          <div className="grid grid-cols-3 gap-x-2 gap-y-8"> {/* Adjusted spacing */}
            {
              Fooddata.filter((data) => (data.CategoryName === item.CategoryName && (data.name.toLowerCase().includes(search.toLowerCase())))).map((filteritems) => (
                <div className='flex-col' key={filteritems._id}>
                  <Cards foodname={filteritems} foodoptions={filteritems.options[0]} />
                </div>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>

  <Footer />
</div>



  );
};

export default Home;

