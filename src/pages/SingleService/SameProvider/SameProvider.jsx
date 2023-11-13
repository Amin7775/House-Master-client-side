import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SameProvider = ({ServiceDetails,setSameProviderService}) => {
    const {
        service,price,serviceArea ,_id,servicePhotoURL,providerEmail
    }=ServiceDetails;
    // const allData = {}
    const [allData,setAllData]= useState([]);

    useEffect(() => {
        axios
          .get(`https://house-master-server.vercel.app/services/data?email=${providerEmail}`)
          .then((data) => {
            setAllData(data.data)
          });
      }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 550, behavior: 'smooth' });
      
        const filter=allData.filter(sameService => sameService._id !== _id)
        setSameProviderService(filter)

      
    };
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={servicePhotoURL} alt="Shoes" className="h-[300px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service}</h2>
        <h2 className="card-title">Price : {price}/-BDT</h2>
        <h2 className="card-title">Service Area : {serviceArea}</h2>

        <div className="card-actions justify-center">
          
          <Link to={`/services/${_id}`}>
            <button onClick={scrollToTop} className="btn bg-yellow-300 hover:bg-yellow-400">
              View Details
            </button>
          </Link>
          
        </div>
      </div>
    </div>
    );
};

export default SameProvider;