import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyServicesCard = ({ createdService,setCreatedServices,allServices,setAllservices }) => {

  // const [myServices,setMyservices] = useState(createdService)
  const {
    _id,
    service,
    servicePhotoURL,
    // short_description,
    // providerName,
    // providerPhotoURL,
    price,
    serviceArea,
  } = createdService;


  const handleDelete = (_id) =>{
    // console.log("clicked on ", _id)
    // axios.delete(`https://house-master-server.vercel.app/services/${_id}`)
    
    // .then(res => {
    //   Swal.fire({
    //     title: "Are you sure about deleting this service?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!"
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       const remaining = allServices.filter(remainingService => remainingService._id !== _id)
    //       setCreatedServices(remaining)
    //       setAllservices(remaining)

    //       Swal.fire({
    //         title: "Deleted!",
    //         text: "Your Service  has been deleted.",
    //         icon: "success"
    //       })
    //     }
    //   });
    //   // console.log(res)
      
    // })
    
      Swal.fire({
        title: "Are you sure about deleting this service?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          axios.delete(`https://house-master-server.vercel.app/services/${_id}`)
          .then(res =>{

            const remaining = allServices.filter(remainingService => remainingService._id !== _id)
            setCreatedServices(remaining)
            setAllservices(remaining)
            
            Swal.fire({
              title: "Deleted!",
              text: "Your Service  has been deleted.",
              icon: "success"
            })
          })
        }
      });
      // console.log(res)
      
    
    
  }
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
          <Link to={`/updateService/${_id}`}>
            <button className="btn bg-yellow-300 hover:bg-yellow-400">
              Update
            </button>
          </Link>
          <Link to={`/services/${_id}`}>
            <button className="btn bg-yellow-300 hover:bg-yellow-400">
              View Details
            </button>
          </Link>
          <button onClick={()=>handleDelete(_id)} className="btn bg-yellow-300 hover:bg-yellow-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServicesCard;
