import React from 'react'
import Title from '../../Pages/Title'
import image1 from '../../assets/girlimage.avif'
import image2 from '../../assets/girlimage2.avif'
function PicksSection() {
  return (
    <div className='w-full mt-4 text-center flex flex-col gap-5 justify-center items-center'>
    <Title text1="Editor's Picks"/>
    <div className="image flex gap-1 ">
      <img src={image1} alt="image" className=' cursor-pointer'/>
      <img src={image2} alt="image" className=' cursor-pointer'/>
    </div>
      
    </div>
  )
}

export default PicksSection
