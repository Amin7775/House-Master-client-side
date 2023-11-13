import { Link } from "react-router-dom";
import PopularServicesCard from "./PopularServicesCard";

const PopularServices = ({ filterData }) => {
  // console.log(filterData);
  return (
    <div className="bg-[#f5f5f9] p-5 md:p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold  mb-10">
          Popular Services
        </h1>

        <div className="p-1">
          {/* {
                    <PopularServicesCard filterData={filterData}></PopularServicesCard>
                } */}
          <div className="grid grid-cols-1 gap-10 md:gap-0 lg:grid-cols-2 md:border-4 border-yellow-300 md:mx-20 mb-5">
            {/* 1 */}
            <div className="flex flex-col shadow-sm">
              <div className="">
                <img
                  className="h-[200px] md:h-[400px] w-full"
                  src={filterData[0]?.servicePhotoURL}
                  alt=""
                />
              </div>
              <div className="flex h-full flex-col justify-center bg-[#323233] text-white">
                <div className="my-2 px-2">
                  <h1 className="text-xl md:text-4xl text-center font-semibold border-b-4 pb-2 px-5 border-[#323233] ">
                    {filterData[0]?.service}
                  </h1>
                  <div className="flex items-center justify-between mt-2 px-2 md:px-5">
                    <h2 className="text-base md:text-lg ">
                      <span className="font-medium">Service Provider: </span>
                      {filterData[0]?.providerName}
                    </h2>
                    
                    <img
                      src={filterData[0]?.providerPhotoURL}
                      className="h-10 w-10 md:h-14 md:w-14 mr-2 rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base md:text-lg px-2 md:px-5">
                      <span className="font-medium">Service Price: </span>
                      {filterData[0]?.price}/-BDT.
                    </h2>
                  <div className="collapse bg-[#323233] text-white rounded-none w-full">
                    <input type="checkbox" />
                    <div className="collapse-title text-center px-5">Click Here to See/Hide Description</div>
                    <div className="collapse-content">
                      <p>{filterData[0]?.short_description}</p>
                    </div>
                  </div>
                  <div className="flex justify-center"> 
                  <Link to={`/services/${filterData[0]?._id}`}>
                  <button className="btn mb-2 bg-yellow-300 hover:bg-yellow-400 border-0 rounded-none">Show Details</button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col shadow-sm lg:border-4 lg:border-t-0 lg:border-r-0 lg:border-b-0 md:border-t-4 border-yellow-300">
              <div className="">
                <img
                  className="h-[200px] md:h-[400px] w-full"
                  src={filterData[1]?.servicePhotoURL}
                  alt=""
                />
              </div>
              <div className="flex h-full flex-col justify-center bg-[#323233] text-white">
                <div className="my-2 px-2">
                  <h1 className="text-xl md:text-4xl text-center font-semibold border-b-4 pb-2 px-5 border-[#323233] ">
                    {filterData[1]?.service}
                  </h1>
                  <div className="flex items-center justify-between mt-2 px-2 md:px-5">
                    <h2 className="text-base md:text-lg ">
                      <span className="font-medium">Service Provider: </span>
                      {filterData[1]?.providerName}
                    </h2>
                    
                    <img
                      src={filterData[1]?.providerPhotoURL}
                      className="h-10 w-10 md:h-14 md:w-14 mr-2 rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base md:text-lg px-2 md:px-5">
                      <span className="font-medium">Service Price: </span>
                      {filterData[1]?.price}/-BDT.
                    </h2>
                  <div className="collapse bg-[#323233] text-white rounded-none w-full">
                    <input type="checkbox" />
                    <div className="collapse-title text-center px-5">Click Here to See/Hide Description</div>
                    <div className="collapse-content">
                      <p>{filterData[1]?.short_description}</p>
                    </div>
                  </div>
                  <div className="flex justify-center"> 
                  <Link to={`/services/${filterData[1]?._id}`}>
                  <button className="btn mb-2 bg-yellow-300 hover:bg-yellow-400 border-0 rounded-none">Show Details</button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col shadow-sm md:border-t-4 md:border-b-4 lg:border-b-0 border-yellow-300">
              <div className="">
                <img
                  className="h-[200px] md:h-[400px] w-full"
                  src={filterData[2]?.servicePhotoURL}
                  alt=""
                />
              </div>
              <div className="flex h-full flex-col justify-center bg-[#323233] text-white">
                <div className="my-2 px-2">
                  <h1 className="text-xl md:text-4xl text-center font-semibold border-b-4 pb-2 px-5 border-[#323233] ">
                    {filterData[2]?.service}
                  </h1>
                  <div className="flex items-center justify-between mt-2 px-2 md:px-5">
                    <h2 className="text-base md:text-lg ">
                      <span className="font-medium">Service Provider: </span>
                      {filterData[2]?.providerName}
                    </h2>
                    
                    <img
                      src={filterData[2]?.providerPhotoURL}
                      className="h-10 w-10 md:h-14 md:w-14 mr-2 rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base md:text-lg px-2 md:px-5">
                      <span className="font-medium">Service Price: </span>
                      {filterData[2]?.price}/-BDT.
                    </h2>
                  <div className="collapse bg-[#323233] text-white rounded-none w-full">
                    <input type="checkbox" />
                    <div className="collapse-title text-center px-5">Click Here to See/Hide Description</div>
                    <div className="collapse-content">
                      <p>{filterData[2]?.short_description}</p>
                    </div>
                  </div>
                  <div className="flex justify-center"> 
                  <Link to={`/services/${filterData[2]?._id}`}>
                  <button className="btn mb-2 bg-yellow-300 hover:bg-yellow-400 border-0 rounded-none">Show Details</button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="flex flex-col shadow-sm lg:border-4 lg:border-t-4 lg:border-r-0 lg:border-b-0 border-yellow-300">
              <div className="">
                <img
                  className="h-[200px] md:h-[400px] w-full"
                  src={filterData[0]?.servicePhotoURL}
                  alt=""
                />
              </div>
              <div className="flex h-full flex-col justify-center bg-[#323233] text-white">
                <div className="my-2 px-2">
                  <h1 className="text-xl md:text-4xl text-center font-semibold border-b-4 pb-2 px-5 border-[#323233] ">
                    {filterData[0]?.service}
                  </h1>
                  <div className="flex items-center justify-between mt-2 px-2 md:px-5">
                    <h2 className="text-base md:text-lg ">
                      <span className="font-medium">Service Provider: </span>
                      {filterData[0]?.providerName}
                    </h2>
                    
                    <img
                      src={filterData[0]?.providerPhotoURL}
                      className="h-10 w-10 md:h-14 md:w-14 mr-2 rounded-full"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base md:text-lg px-2 md:px-5">
                      <span className="font-medium">Service Price: </span>
                      {filterData[0]?.price}/-BDT.
                    </h2>
                  <div className="collapse bg-[#323233] text-white rounded-none w-full">
                    <input type="checkbox" />
                    <div className="collapse-title text-center px-5">Click Here to See/Hide Description</div>
                    <div className="collapse-content">
                      <p>{filterData[0]?.short_description}</p>
                    </div>
                  </div>
                  <div className="flex justify-center"> 
                  <Link to={`/services/${filterData[3]?._id}`}>
                  <button className="btn mb-2 bg-yellow-300 hover:bg-yellow-400 border-0 rounded-none">Show Details</button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
            <Link to={'/services'}>
                <button className="btn bg-yellow-300 hover:bg-yellow-300 border-none rounded-none px-5 font-semibold text-base">Show All</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
