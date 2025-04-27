import React from "react";

function ProductedCard({name,image}) {
  return (
    <div className=" relative w-[300px] h-[400px] rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center gap-2 justify-center">
      <img
        className=" z-0 w-full h-full"
        src={image}
        alt="image"
      />
      <div className="flex flex-col gap-3 w-full absolute bottom-1 z-100  justify-center p-2">
      <b className=" text-[#fff] text-2xl">{name} </b>

       <div className="w-full flex justify-center items-center">     
        <button className="bg-[#fff] w-fit text-[#000] py-2 px-4 rounded hover:text-[#fff] hover:bg-[#000] transition duration-300 ease-in-out shadow-2xl shadow-[#000] cursor-pointer">
          Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProductedCard;
