import React, { useEffect } from "react";
import ProductedCard from "../../Pages/ProductedCard";
import Title from "../../Pages/Title";
function LatestProduct() {
  let url="http://localhost:5000/data"
  const [user, setUser] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  })

  

  return (
    <div className=" w-full flex flex-col text-center justify-center items-center gap-5 mt-10 mb-10">
      <Title text1="Bestseller Trends"></Title>
      <div className="latastpordect  m-auto gap-5 flex justify-around flex-wrap ">
        {user.slice(0,4).map((item, index) => {
          return <ProductedCard name={item.name} image={item.images[0].url} />;
        })}
      </div>
      
    </div>
  );
}

export default LatestProduct;
