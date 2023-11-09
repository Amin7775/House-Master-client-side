import axios from "axios";
import { useEffect, useState } from "react";

const ServicesSearch = ({services,setServices}) => {
  const [preloadedData,setPreloadedData] = useState([]);
  useEffect(()=>{
    axios('http://localhost:5000/services')
    .then(res =>  setPreloadedData(res.data))
  },[])
console.log(preloadedData);

  const handleSearch= e =>{
    e.preventDefault();
    const searchInput = e.target.search.value;
    console.log(searchInput)
    const filter = services.filter(serVice => serVice.service.toLowerCase().includes(searchInput))
    console.log(filter)
    setServices(filter)
    if(!searchInput){
      setServices(preloadedData)
    }
  }

  return (
    <div className="max-w-xl h-20 mx-auto mt-[-40px] ">
      <div className="bg-[#323233] w-full h-full text-black  px-5 border-0">
        <form onSubmit={handleSearch} className="flex items-center justify-center h-full">
        <input
          type="text"
          name="search"
          placeholder="Search By Service Name || Search After All Products Viewed"
          className="input w-full rounded-none focus:border-yellow-300 focus:border-4 bg-white"
        />
        <button type="submit" className="btn rounded-none bg-yellow-300 hover:bg-yellow-400 border-0">
          Search
        </button>
        </form>
      </div>
    </div>
  );
};

export default ServicesSearch;
