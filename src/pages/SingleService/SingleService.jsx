import { useLoaderData } from "react-router-dom";
import SingleServiceBanner from "./SingleServiceBanner/SingleServiceBanner";
import { AiOutlineLine } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SingleService = () => {
  const loader = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    service,
    servicePhotoURL,
    short_description,
    providerName,
    providerPhotoURL,
    price,
    serviceArea,
    providerEmail,
  } = loader;
  console.log(loader);

  //handlePurchase
  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const service = form.service.value;
    const servicePhotoURL = form.servicePhotoURL.value;
    const providerEmail = form.email.value;
    const userEmail = form.userEmail.value;
    const date = form.date.value;
    const price = form.price.value;
    const productId = _id;
    const specialInstruction = form.specialInstruction.value;

    const purchaseData = {
      productId,
      providerName,
      service,
      servicePhotoURL,
      providerEmail,
      userEmail,
      date,
      price,
      specialInstruction,
      status: "Pending",
      serviceArea
    };

    console.log(purchaseData)

    axios.post("http://localhost:5000/booked",purchaseData)
    .then(res=>{
      console.log('res :>> ', res.data);
      Swal.fire({
        title: "Thank You For Booking This Service",
        text: "You Can View You Booking Details On My Schedules Page",
        icon: "success"
      });
      document.getElementById("my_modal_4").close();
    })
  };

  return (
    <div className="bg-[#fbfbfa] min-h-screen">
      <Helmet>
        <title>House Master | Service Details</title>
      </Helmet>
      <SingleServiceBanner> </SingleServiceBanner>

      {/* single service */}
      <div className="container mx-auto bg-white my-10 w-full p-10 shadow-md">
        <div className="grid grid-cols-2">
          <img src={servicePhotoURL} className="mx-auto w-full" alt="" />
          <div className="h-full flex items-center bg-[#323233] p-5">
            <h1 className="text-6xl font-bold text-white mx-10">{service}</h1>
          </div>
          <div className="bg-[#323233] p-10">
            <div className="text-white">
              <div className="flex items-center gap-2">
                <AiOutlineLine className="font-medium text-3xl"></AiOutlineLine>
                <h1 className="text-2xl font-medium mb-3">
                  Service Informations
                </h1>
              </div>
              <div>
                <h1 className="text-lg">
                  <span className="text-lg font-medium">Service Name:</span>{" "}
                  {service}
                </h1>
                <h1 className="text-lg">
                  <span className="text-lg font-medium">Service Price:</span>{" "}
                  {price}/-Taka
                </h1>
                <h1 className="text-lg mb-3">
                  <span className="text-lg font-medium">Provider Name:</span>{" "}
                  {providerName}
                </h1>
                <h1 className="text-lg">
                  <span className="text-lg font-medium">
                    Service Description:
                  </span>
                  <br /> {short_description}
                </h1>
              </div>
              <div className="flex mt-3">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="btn bg-yellow-300 hover:bg-yellow-400 rounded-none border-none px-5"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col h-full">
              <img src={providerPhotoURL} className="h-full" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className=" py-10 px-5 max-w-5xl mx-auto">
            <h2 className="text-3xl mb-10 font-semibold text-gray-700 capitalize dark:text-white text-center ">
              Confirm Purchase
            </h2>
            <form onSubmit={handlePurchase}>
              <div className="grid grid-cols-2 gap-6 mt-4 ">
                <div className="w-full">
                  <label className="text-gray-700 dark:text-gray-200">
                    Service Name
                  </label>
                  <input
                    readOnly
                    defaultValue={service}
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
                    defaultValue={servicePhotoURL}
                    placeholder="Enter Service Picture URL"
                    className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
                  />
                </div>
                {/*Provider email */}
                <div className="w-full">
                  <label className="text-gray-700 dark:text-gray-200">
                    Service Provider Email
                  </label>
                  <input
                    required
                    readOnly
                    name="email"
                    type="text"
                    defaultValue={providerEmail}
                    className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
                  />
                </div>
                {/*User email */}
                <div className="w-full">
                  <label className="text-gray-700 dark:text-gray-200">
                    User Email
                  </label>
                  <input
                    required
                    readOnly
                    name="userEmail"
                    type="text"
                    defaultValue={user?.email}
                    className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
                  />
                </div>
                {/* Service Taking Date */}
                <div className="w-full">
                  <label className="text-gray-700 dark:text-gray-200">
                    Service Taking Date
                  </label>
                  <input
                    required
                    name="date"
                    type="date"
                    // defaultValue={displayName}
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
                    readOnly
                    defaultValue={price}
                    placeholder="Enter Service Price"
                    className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm  focus:border-yellow-300  focus:outline-none "
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-gray-700 dark:text-gray-200">
                    Special Instructions
                  </label>
                  <textarea
                    name="specialInstruction"
                    // required
                    rows={5}
                    placeholder="|| Write Special Instructions Here ||"
                    className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border-2 border-gray-300 rounded-sm   focus:border-yellow-300 focus:outline-none "
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  className="px-10 py-3 leading-5 transition-colors duration-200 transform bg-yellow-300 text-black font-medium  hover:bg-yellow-400 focus:outline-none rounded-sm"
                  type="submit"
                >
                  Purchase This Service
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SingleService;
