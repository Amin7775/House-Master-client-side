import axios from "axios";
import ServicesBanner from "./ServicesBanner/ServicesBanner";
import ServicesSearch from "./ServicesSearch/ServicesSearch";
import ServiceCard from "./ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Services = () => {
    const [services,setServices] = useState([])
    const [showAll , setShowAll] = useState(false)
    // console.log('showAll :>> ', showAll);
    useEffect(() => {
    axios('https://house-master-server.vercel.app/services')
      .then(res => {
        if (!showAll) {
          const filteredServices = res.data.slice(0, 6);
          setServices(filteredServices);
        } else {
          setServices(res.data);
        }
      })
  }, [showAll]);
    
    
    
        

    return (
        <div className="min-h-screen bg-[#fbfbfa]">
          <Helmet>
        <title>House Master | Services</title>
      </Helmet>
            <ServicesBanner></ServicesBanner>
            <ServicesSearch services={services} setServices={setServices}></ServicesSearch>
            {services.map(singleService=> <ServiceCard key={singleService._id} singleService={singleService}></ServiceCard>)}
          
            <div className="pt-5 pb-10">
            {   
                !showAll && <div className="flex justify-center">               
                <button onClick={()=>setShowAll(!showAll)} className="btn bg-yellow-300 hover:bg-yellow-400">Show More</button>
            </div>
            }
            {   
                showAll && <div className="flex justify-center">               
                <button onClick={()=>setShowAll(!showAll)} className="btn bg-yellow-300 hover:bg-yellow-400">Show Less</button>
            </div>
            }
            </div>
        </div>
    );
};

export default Services;