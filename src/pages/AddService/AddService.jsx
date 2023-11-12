import { useContext } from "react";
import AddServiceBanner from "./AddServiceBanner/AddServiceBanner";
import { AiOutlineLine } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

const AddService = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  console.log(user.displayName);

    const handleAddService = e =>{
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
            short_description,
            status:"Pending"
        }

        console.log(addedService)

        axios.post("http://localhost:5000/services",addedService)
        .then(res => {
          console.log(res);
          Swal.fire({
            title: "Service Added Successfully",
            text: "Your Service Has Been Added and Others Can Now View It From Service Page",
            icon: "success"
          });
          form.reset()
        })
        .catch(error => {
          Swal.fire({
            title: "There Was An Error Adding Your Service",
            text: `Error: ${error.message}`,
            icon: "success"
          });
        })
        
    }

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <Helmet>
        <title>House Master | Add Service</title>
      </Helmet>
      <AddServiceBanner></AddServiceBanner>
      {/* form */}
      <div className=" py-10 px-5 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white text-center ">
          Add Service Informations 
        </h2>
        <form onSubmit={handleAddService}>
          <h1 className="text-xl font-medium mt-10">
            <AiOutlineLine className="inline"></AiOutlineLine> Service Provider
            Information
          </h1>
          <div className="grid grid-cols-2 gap-6 mt-4 ">
            {/* provider name */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                Provider Name
              </label>
              <input
                required
                readOnly
                name="providerName"
                type="text"
                defaultValue={displayName}
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
            {/*Provider email */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">Email</label>
              <input
                required
                readOnly
                name="email"
                type="text"
                defaultValue={email}
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
            {/* Provider pictureURL */}
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                PhotoURL
              </label>
              <input
                required
                readOnly
                name="providerPhotoURL"
                type="text"
                defaultValue={photoURL}
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm  focus:border-yellow-300  focus:outline-none "
              />
            </div>
          </div>

          {/* Service Details */}
          <h1 className="text-xl font-medium mt-10">
            <AiOutlineLine className="inline"></AiOutlineLine> Service
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
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
