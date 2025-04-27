import React,{ useEffect,useState} from 'react'
import axios from 'axios'
// import ProductedCard from '../../Pages/ProductedCard'
import LatestCard from './LatestCard'
import Title from '../../Pages/Title'
function TrendingLook({title}) {
  const [data, setData] = useState([])
useEffect(() => {
  axios.get('http://localhost:5000/data')
  .then((response) => {
    setData(response.data)
  })


})
  return (
    <div className=' w-full text-center flex flex-col gap-5 justify-center items-center'>
    <Title text1={title}/>
    <div className="flex w-full flex-wrap gap-5 justify-center ">

    
    {
      data.slice(20,24).map((item) => (
        <LatestCard key={item.id} name={item.name} image={item.images[0].url} price={item.Price} description={item.description}/>
      ))
    }
    </div>
    {/* <LatestCard name="Slim-Fit Stretch Shir"/> */}
      
    
    
    </div>
  )
}

export default TrendingLook
