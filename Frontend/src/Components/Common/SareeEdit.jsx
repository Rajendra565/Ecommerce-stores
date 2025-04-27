import React from 'react'
import video from '../../assets/Video/video1.mp4'
import image1 from '../../assets/assetskalikiimage/asset 37.jpeg'
import image2 from '../../assets/assetskalikiimage/asset 38.jpeg'
import image3 from '../../assets/assetskalikiimage/asset 39.jpeg'
import Title from '../../Pages/Title'

function SareeEdit() {
  return (
    <div className=' w-full mt-4 text-center flex flex-col gap-5 justify-center items-center'>
    <Title text1="The Saree Edit"/>
    <div className=' w-full flex bg-[#f1f1] p-3 justify-center items-center flex-row gap-3 flex-wrap flex-col'>
      <div className='bg-[orange] p-2 object-cover image flex gap-3 w-[50%] h-[100%] '>
        <video className=' h-full' src={video} autoPlay muted loop></video>
        <div className="image flex gap-3 flex-col">
          <div className="top ">
             <img className=' ' src={image1} alt="image" />
          </div>
          <div className="flex gap-3">
            <img src={image2} alt="image" />
            <img src={image3} alt="image" />
          </div>
        </div>
      </div>
      <div className="text  bg-[red] flex flex-col gap-5 justify-center items-center flex-wrap">
        <b className=' text-xl'>Wedding-Ready Within A Minute Instant Saree</b>
        <button className=' p-3'>Shop now</button>
      </div>
    </div>

      
    </div>

  
  )
}

export default SareeEdit
