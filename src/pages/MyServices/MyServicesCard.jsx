import React from "react";
import { Link } from "react-router-dom";

const MyServicesCard = ({ createdService }) => {
  const {
    _id,
    service,
    servicePhotoURL,
    short_description,
    providerName,
    providerPhotoURL,
    price,
    serviceArea,
  } = createdService;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={servicePhotoURL} alt="Shoes" className="h-[300px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service}</h2>
        <h2 className="card-title">Price : {price}/-BDT</h2>
        <h2 className="card-title">Service : {serviceArea}</h2>

        <div className="card-actions justify-center">
          <Link>
            <button className="btn bg-yellow-300 hover:bg-yellow-400">
              Update
            </button>
          </Link>
          <Link>
            <button className="btn bg-yellow-300 hover:bg-yellow-400">
              View Details
            </button>
          </Link>
          <button className="btn bg-yellow-300 hover:bg-yellow-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServicesCard;
