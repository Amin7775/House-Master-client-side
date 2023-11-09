import axios from "axios";
import ServicesBanner from "./ServicesBanner/ServicesBanner";
import ServicesSearch from "./ServicesSearch/ServicesSearch";
import ServiceCard from "./ServiceCard/ServiceCard";
import { useEffect, useState } from "react";

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        axios('http://localhost:5000/services')
    .then(res=> {
        console.log(res.data)
        setServices(res.data)
    })
    },[])

    

    return (
        <div className="min-h-screen bg-[#fbfbfa]">
            <ServicesBanner></ServicesBanner>
            <ServicesSearch services={services} setServices={setServices}></ServicesSearch>
            {services.map(singleService=> <ServiceCard key={singleService._id} singleService={singleService}></ServiceCard>)}
        </div>
    );
};

export default Services;