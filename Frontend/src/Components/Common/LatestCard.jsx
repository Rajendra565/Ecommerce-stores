import React from 'react'

function LatestCard({name,image,price,description}) {
  return (
    <div className="  w-[300px] h-[400px] rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img
        className=" z-0 w-full h-full"
        src={image}
        alt="image"
      />
      <div className="flex flex-col gap-3 w-full bottom-1 z-100 justify-start text-start p-2">
      <span className=" text-[#000] text-xl">{description.slice(0,30)} </span>

       <div className="w-full flex justify-start items-center mb-3.5">     
        {/* <button className="bg-[#000] w-fit text-[#fff] py-2 px-4 rounded hover:text-[#000] hover:bg-[#fff] transition duration-300 ease-in-out shadow-2xl shadow-[#000] cursor-pointer">
          Add to Cart
        </button> */}
        <span>${price}</span>
        </div>
      </div>
    </div>
  )
}

export default LatestCard
