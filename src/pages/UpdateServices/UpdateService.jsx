import { useContext, useEffect } from "react";
// import AddServiceBanner from "./AddServiceBanner/AddServiceBanner";
import { AiOutlineLine } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import UpdateServicesBanner from "./UpdateServicesBanner/UpdateServicesBanner";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const { photoURL } = user;
  const serviceData = useLoaderData()
  // console.log(serviceData)
  const {
    _id,
    price,
    providerEmail,
    providerName,
    service,
    serviceArea,
    servicePhotoURL,
    short_description
  } = serviceData;
  

    const handleUpdateService = e =>{
        e.preventDefault()
        const form = e.target;
        const providerName = form.providerName.value;
        const providerEmail = form.email.value;
        const providerPhotoURL = form.providerPhotoURL.value;
        const service = form.service.value;
        const servicePhotoURL = form.servicePhotoURL.value;
        const price = form.price.value;
        const serviceArea= form.serviceArea.value;
        const short_description= form.short_description.value;

        const addedService = {
            providerName,
            providerEmail,
            providerPhotoURL,
            service,
            servicePhotoURL,
            price,
            serviceArea,
            short_description
        }

        // console.log(addedService)

        axios.put(`https://house-master-server.vercel.app/services/${_id}`,addedService)
        .then(res => {
          // console.log("update Success", res)
          if(res?.data?.modifiedCount==1){
            Swal.fire({
              title: "Service Updated",
              text: "Your Service Has Been Updated",
              icon: "success"
            });
          }else{
            Swal.fire({
              title: "Update Failed",
              text: "You Didn't Update Any Service Data",
              icon: "error"
            });
          }
        })
        
    }

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <Helmet>
        <title>House Master | Update Service</title>
      </Helmet>
      <UpdateServicesBanner></UpdateServicesBanner>
      {/* form */}
      <div className=" py-10 px-5 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white text-center ">
          Update Service Informations 
        </h2>
        <form onSubmit={handleUpdateService}>
          <h1 className="text-xl font-medium mt-10">
            <AiOutlineLine className="inline"></AiOutlineLine>Update Service Provider
            Information
          </h1>
          <div className="grid grid-cols-2 gap-6 mt-4 ">
            {/* provider name */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                Provider Name (Editable)
              </label>
              <input
                required
                name="providerName"
                type="text"
                defaultValue={providerName}
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
            {/*Provider email */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">Email (Not Editable)</label>
              <input
                required
                readOnly
                name="email"
                type="text"
                defaultValue={providerEmail}
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
            {/* Provider pictureURL */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                PhotoURL (Editable)
              </label>
              <input
                required
                name="providerPhotoURL"
                type="text"
                defaultValue={photoURL}
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm  focus:border-yellow-300  focus:outline-none "
              />
            </div>
          </div>

          {/* Service Details */}
          <h1 className="text-xl font-medium mt-10">
            <AiOutlineLine className="inline"></AiOutlineLine> Update Service
            Information
          </h1>
          <div className="grid grid-cols-2 gap-6 mt-4 ">
            {/* service name */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                Service Name
              </label>
              <input
                required
                name="service"
                type="text"
                defaultValue={service}
                placeholder="Enter Service Name"
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
            {/*Service PhotoURL */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                Service PhotoURL
              </label>
              <input
                required
                name="servicePhotoURL"
                type="text"
                defaultValue={servicePhotoURL}
                placeholder="Enter Service Picture URL"
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
            {/* Service Price */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                Service Price
              </label>
              <input
                required
                name="price"
                type="text"
                defaultValue={price}
                placeholder="Enter Service Price"
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm  focus:border-yellow-300  focus:outline-none "
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                Service Area
              </label>
              <input
                required
                name="serviceArea"
                type="text"
                defaultValue={serviceArea}
                placeholder="Enter Service Area"
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm  focus:border-yellow-300  focus:outline-none "
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Service Description
              </label>
              <textarea
                name="short_description"
                required
                rows={5}
                defaultValue={short_description}
                placeholder="Write Service Short Description Here"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-sm   focus:border-yellow-300 focus:outline-none "
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="px-10 py-3 leading-5 transition-colors duration-200 transform bg-yellow-300 text-black font-medium  hover:bg-yellow-400 focus:outline-none rounded-sm"
              type="submit"
            >
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
