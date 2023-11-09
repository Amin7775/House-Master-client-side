import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const ServiceCard = ({ singleService }) => {
  const {
    _id,
    service,
    servicePhotoURL,
    short_description,
    providerName,
    providerPhotoURL,
    price,
    serviceArea
  } = singleService;
  return (
    <div className="container mx-auto my-16">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
          <img src={servicePhotoURL} className="w-full h-full" alt="Album" />
        </figure>
        <div className="card-body w-1/2 h-full">
          <h2 className="card-title text-2xl mx-auto mb-2">Service Informations</h2>
          <hr className="border-2 border-yellow-300 mb-2" />
          {/* <img src="https://i.ibb.co/m8tGt8f/h6-slide-2-separator.png" alt="" /> */}
          <div className="flex justify-between my-0 w-full">
          <h2 className="text-2xl card-title flex-1"> {service}</h2>
          <img src={providerPhotoURL} className="w-16 h-16 rounded-full " alt="" />

          </div>
          <h2 className="text-lg font-medium">Price : {price}/-TK</h2>
          <h2 className="text-lg font-medium">Area : {serviceArea}</h2>
          <h2 className="text-lg font-medium">Provider: {providerName}</h2>

          
          <p>Description:</p>
          <p>{short_description}</p>
      
          <div className="card-actions justify-end ">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
